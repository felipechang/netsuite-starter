# <%= project %>

## Initial Steps
1) Check the details in the .env file
2) Write your TypeScript code inside the source folder
3) Type `nsx build` to produce an artifact

## NSX commands
`nsx template` creates a NetSuite script or component file

`nsx artifact` produces a zipped artifact in the deploy folder

`nsx build` transpiles, lints, and runs tests before producing the artifact

## Test Setup

- suitecloud.config.js is for the SuiteCloud jest configuration
- jest.config.js is for the jest project type configuration 
- Start tests using `npm test`

For more information see: [Oracle's SuiteCloud jest](https://github.com/oracle/netsuite-suitecloud-sdk/tree/master/packages/unit-testing)
