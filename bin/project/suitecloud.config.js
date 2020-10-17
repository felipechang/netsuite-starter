const SuiteCloudJestUnitTestRunner = require("@oracle/suitecloud-unit-testing/services/SuiteCloudJestUnitTestRunner");

module.exports = {
    defaultProjectFolder: "source",
    commands: {
        "project:deploy": {
            beforeExecuting: async args => {
                await SuiteCloudJestUnitTestRunner.run({
                    // Jest configuration options.
                });
                return args;
            },
        },
    },
};