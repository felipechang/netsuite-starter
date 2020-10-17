exports.__esModule = true;
exports.makeProject = void 0;
var ejs_1 = require("ejs");
var fs_1 = require("fs");
var inquirer_1 = require("inquirer");
exports.makeProject = function () {
    var CURR_DIR = process.cwd();
    var program = inquirer_1.prompt([{
            type: "input",
            name: "project-name",
            message: "Enter project name:",
            validate: function (input) {
                if (/^([A-Za-z\-_\d])+$/.test(input)) {
                    return true;
                }
                return "May only include letters, numbers, underscores and hashes";
            }
        }, {
            type: "list",
            name: "project-type",
            message: "Enter project type:",
            choices: [
                { name: "Account Customization", value: "ACP" },
                { name: "SuiteApp", value: "SUITEAPP" },
            ]
        }, {
            type: "input",
            name: "project-id",
            message: "Enter project ID:",
            when: function (answers) {
                return answers["project-type"] === "SUITEAPP";
            },
            validate: function (input) {
                if (/^([a-z0-9])+$/.test(input) && input.length < 40) {
                    return true;
                }
                return "May only include letters and numbers with less than 40 characters";
            }
        }, {
            type: "input",
            name: "project-version",
            message: "Enter project ID:",
            when: function (answers) {
                return answers["project-type"] === "SUITEAPP";
            },
            validate: function (input) {
                if (/^([0-9.])+$/.test(input)) {
                    return true;
                }
                return "May only include numbers";
            }
        }, {
            type: "input",
            name: "publisher-id",
            message: "Enter publisher ID [com.netsuite]:",
            when: function (answers) {
                return answers["project-type"] === "SUITEAPP";
            },
            validate: function (input) {
                if (/^([a-z.])+$/.test(input)) {
                    return true;
                }
                return "May only include letters";
            }
        }, {
            type: "input",
            name: "author-name",
            message: "Enter author name:",
            validate: function (input) {
                if (/^([A-Za-z\- ])+$/.test(input)) {
                    return true;
                }
                return "May only include letters and hashes";
            }
        }, {
            type: "input",
            name: "author-email",
            message: "Enter author email:",
            validate: function (input) {
                if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input)) {
                    return true;
                }
                return "Must be a valid email";
            }
        }, {
            type: "input",
            name: "company-name",
            message: "Enter company name:"
        }, {
            type: "input",
            name: "project-prefix",
            message: "Enter file prefix:",
            validate: function (input) {
                if (/^[A-Za-z]+$/.test(input) && input.length <= 5) {
                    return true;
                }
                return "Prefix must be 5 letters or less";
            }
        },]);
    program.then(function (answers) {
        var data = {
            projectName: answers["project-name"],
            projectType: answers["project-type"],
            authorName: answers["author-name"],
            authorEmail: answers["author-email"],
            companyName: answers["company-name"],
            filePrefix: answers["project-prefix"],
            projectId: answers["project-id"],
            projectVersion: answers["project-version"],
            publisherId: answers["publisher-id"]
        };
        fs_1.mkdirSync(CURR_DIR + "/" + data.projectName);
        createDirectoryContents(__dirname + "/project", data.projectName, data);
        var partialPath = __dirname + "/partials/" + data.projectType;
        if (data.projectType === "ACP") {
            createDirectoryContents(partialPath, data.projectName + "/source", data);
        }
        if (data.projectType === "SUITEAPP") {
            var project = data.publisherId + "." + data.projectId;
            fs_1.mkdirSync(CURR_DIR + "/" + data.projectName + "/source/" + project);
            createDirectoryContents(partialPath, data.projectName + "/source/" + project, data);
            fs_1.mkdirSync(CURR_DIR + "/" + data.projectName + "/source/" + project + "/src/FileCabinet/SuiteApps/" + project);
        }
    });
    var createDirectoryContents = function (path, name, data) {
        var filesToCreate = fs_1.readdirSync(path);
        filesToCreate.forEach(function (file) {
            var origFilePath = path + "/" + file;
            var stats = fs_1.statSync(origFilePath);
            if (stats.isFile()) {
                var contents = fs_1.readFileSync(origFilePath, "utf8");
                var writePath = CURR_DIR + "/" + name + "/" + file;
                fs_1.writeFileSync(writePath, ejs_1.render(contents, data), "utf8");
            }
            else if (stats.isDirectory()) {
                fs_1.mkdirSync(CURR_DIR + "/" + name + "/" + file);
                createDirectoryContents(path + "/" + file, name + "/" + file, data);
            }
        });
    };
};
