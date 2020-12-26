# <%= projectType %>: <%= projectName %>

## Initial Steps

1) Install [SuiteCloud CLI](https://github.com/oracle/netsuite-suitecloud-sdk/tree/master/packages/node-cli) globally
2) Check the details in the .env file
3) Write your TypeScript code inside the source folder
4) Type `nsx build` to produce an artifact

## NSX commands

`nsx template` creates a NetSuite script or component file

`nsx artifact` produces a zipped artifact in the deploy folder

`nsx build` transpiles, lints, and runs tests before producing the artifact

## Test Setup

- suitecloud.config.js is for the SuiteCloud jest configuration
- jest.config.js is for the jest project type configuration
- Start tests using `npm test`

For more information
see: [Oracle's SuiteCloud jest](https://github.com/oracle/netsuite-suitecloud-sdk/tree/master/packages/unit-testing)