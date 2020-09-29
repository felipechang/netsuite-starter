const SuiteCloudJestConfiguration = require("@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration");
const cliConfig = require("./suitecloud.config");

module.exports = SuiteCloudJestConfiguration.build({
	projectFolder: cliConfig.defaultProjectFolder,
	projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
	customStubs: [{
		module: "N/email",
		path: "<rootDir>/stubs/email/email.js"
	}, {
		module: "N/http",
		path: "<rootDir>/stubs/http/http.js"
	}, {
		module: "N/https",
		path: "<rootDir>/stubs/https/https.js"
	}, {
		module: "N/log",
		path: "<rootDir>/stubs/log/log.js"
	}, {
		module: "N/record",
		path: "<rootDir>/stubs/record/record.js"
	}, {
		module: "N/search",
		path: "<rootDir>/stubs/search/search.js"
	}]
});
