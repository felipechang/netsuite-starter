# NetSuite Starter

## Instructions

1. Install SuiteCloud CLI for Node.js: `npm install -g @oracle/suitecloud-cli`

1. Install NetSuite Starter CLI: `npm install -g netsuite-starter`

2. Create new project: `nsx project`

3. Fill in prompted details

4. Enter working directory: `cd my-project`

5. Install dependencies: `npm install`

6. **Read the generated README.md file for further instructions**

## Libraries

### Browser

```typescript

const browserLibrary = new BrowserLibrary();

// MESSAGE

// Create a confirmation message on screen for 5 seconds
// Methods available include: confirmation, error, info, and warning
browserLibrary.message.confirmation({
    message: " This is a message",
    title: "Hi",
    duration: 5000
});

// QUERY

// Get an JSON with key/value query parameters
browserLibrary.query.get();
// => {foo: "bar"}

// Get an JSON with key/value query parameters from the previous page
browserLibrary.query.getPrevious();
// => {foo: "baz"}

// Use query parameters to populate current record body fields
browserLibrary.query.populate(currentRecord, false);

// STORAGE

// Set key/value on session storage
browserLibrary.storage.set("foo", "bar");

// Get session storage item by key
browserLibrary.storage.get("foo");
// => "bar"

// Get session storage item by key
browserLibrary.storage.getAllKeys();
// => ["foo"]

// Remove key from session storage
browserLibrary.storage.remove("foo");

// Clear session storage
browserLibrary.storage.clear();
```

### Cache

```typescript

const cacheLibrary = new CacheLibrary({

    // Name
    name: "cooks",

    // Scope
    scope: Scope.PRIVATE,

    // ttl (optional) ==> Defaults to 300. Has to be greater than 300
    ttl: 60 * 15,

    // Boolean control field (optional) ==> Used as an on/off switch for the cache
    // If a loader is provided it will return that value, if not it returns {key: null}
    toggle: "custscript_myscript_toggle"
});

// Set a formatter for the cache key name
cacheLibrary.formatCacheName((keyName) => {
    return `my_prefix_${keyName}`;
});

// Set cache duration. The calculator is used for convenience
cacheLibrary.setTTL(cacheLibrary.ttlCalculator(({
    hours: 1,
    minutes: 20,
    seconds: 30
})));

// Set key-value pairs
cacheLibrary.set({jim: {cook: true}, john: {cook: false}});

// Get a single key
cacheLibrary.get({name: "jim"});
// => {jim: {cook: true}}

// Get multiple keys
cacheLibrary.get({name: ["jim", "john"]});
// => {jim: {cook: true}, john: {cook: false}}

// Get a single key and provide a loader if not found
cacheLibrary.get({
    name: "jim",
    loader: (key) => {
        // Here we just use the native NetSuite loader
    }
});
// => {jim: {cook: true}}

// Get multiple keys and provide a loader any are not found
cacheLibrary.get({
    name: ["jim", "john"],
    loader: (key) => {
        // Here we just use the native NetSuite loader
    }
});
// All missing keys are cached, and the full result object is returned
// => {jim: {cook: true}, john: {cook: false}}

// Remove a single key
cacheLibrary.remove("jim");

// Remove multiple keys
cacheLibrary.remove(["jim", "john"]);
```

### CSV

```typescript

// Load CSV file by ID
// At this point we can set two customizations:
// - cellCleaner: RegEx used to clean cell contents, defaults to /\s*(.*?)\s*/g
// - columnDelimiter: Used to split columns, defaults to ","
const csvLibrary = new CsvLibrary({
    id: "12345",
    cellCleaner: /"/g,
    columnDelimiter: "','"
});

csvLibrary.getFile()
// => Returns file object

csvLibrary.getRawContents()
// => Returns CSV content string

csvLibrary.jsonToCSV([{foo:"bar"}, {foo:"zoo"}]);
// => "foo\nbar\nzoo"

csvLibrary.toJSON();
// => Returns JSON array with all headers as properties

csvLibrary.toJSON(["Name", "Email"]);
// => Returns JSON array with named headers as properties
```

### GOVERNANCE

```typescript

const governanceLibrary = new GovernanceLibrary();

// Evaluate if we have governance points remaining
governanceLibrary.hasRemaining();

// Get governance points remaining
governanceLibrary.getRemaining();

// Update minimum points required
governanceLibrary.updateFloor(200);

// Run until we exhaust governance points
governanceLibrary.runUntil(
    (remaining) => {
        // Perform record operations
    },
    () => {
        // Optional callback for when we run out of governance
    });
```

### Search

```typescript

// We create the response we want
type Response = { email: string, phone: string };

// Create a search
const searchLibraryCreated = new SearchLibrary({
    type: "customer",
    filters: [{
        name: "firstname",
        operator: Operator.IS,
        values: ["Peter"]
    }],
    columns: [{
        name: "phone"
    }]
});

// Load an existing search
const searchLibraryLoaded = new SearchLibrary({
    type: "customer",
    id: "12345",
});

// Add a column to the search
searchLibraryCreated.addColumn({
    name: "email"
});

// Remove a column to the search
searchLibraryCreated.removeColumn({
    name: "email"
});

// Add a filter to the search
searchLibraryCreated.addFilter({
    name: "lastname",
    operator: Operator.IS,
    values: ["Griffin"]
});

// Remove a filter to the search
searchLibraryCreated.removeFilter({
    name: "lastname",
    operator: Operator.IS,
    values: ["Griffin"]
});

// Set the transform function: This is mandatory and takes care of converting the results
// Response must be in the format {continue: boolean, response: Response}
// If continue is false the search will stop
searchLibraryCreated.setTransform <Response>((result) => {
    return {
        continue: true,
        response: {
            email: result.getValue({
                name: "email"
            }),
            phone: result.getValue({
                name: "phone"
            }),
        }
    };
});

// Get the first two records
const rangeResponse = searchLibraryCreated.getRange<Response>({start: 1, end: 2});
// => [
// {email: "peter1@gmail.com", phone: "9999999"},
// {email: "peter2@gmail.com", phone: "9999999"}
// ]

// Get the all records with a page size of 5
searchLibraryCreated.pageSize = 5;
const response = searchLibraryCreated.getResults<Response>();
// => [
// {email: "peter1@gmail.com", phone: "9999999"},
// {email: "peter2@gmail.com", phone: "9999999"},
// {email: "peter3@gmail.com", phone: "9999999"},
// ]

// Async get the all records
searchLibraryCreated.getResultsClient<Response>((response, error) => {

    if (error) {
        throw new Error(error);
    }

    // response => [
    // {email: "peter1@gmail.com", phone: "9999999"},
    // {email: "peter2@gmail.com", phone: "9999999"},
    // {email: "peter3@gmail.com", phone: "9999999"},
    // ]
});
```

## License

GNU GPL see LICENSE.

## Author

Felipe Chang <felipechang@hardcake.org>
