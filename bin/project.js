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
            type: "input",
            name: "project-author",
            message: "Enter author name:",
            validate: function (input) {
                if (/^([A-Za-z\-_\d])+$/.test(input)) {
                    return true;
                }
                return "May only include letters, numbers, underscores and hashes";
            }
        }, {
            type: "input",
            name: "project-email",
            message: "Enter author email:",
            validate: function (input) {
                if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input)) {
                    return true;
                }
                return "Must be a valid email";
            }
        }, {
            type: "input",
            name: "project-company",
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
        var project = answers["project-name"];
        var author = answers["project-author"];
        var email = answers["project-email"];
        var company = answers["project-company"];
        var prefix = answers["project-prefix"];
        fs_1.mkdirSync(CURR_DIR + "/" + project);
        createDirectoryContents(__dirname + "/project", project, {
            project: project,
            author: author,
            email: email,
            company: company,
            prefix: prefix
        });
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
