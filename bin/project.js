exports.__esModule = true;
exports.makeProject = void 0;
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
                return "Name may only include letters, numbers, underscores and hashes";
            }
        }]);
    program.then(function (answers) {
        var projectName = answers["project-name"];
        var templatePath = __dirname + "/project";
        fs_1.mkdirSync(CURR_DIR + "/" + projectName);
        createDirectoryContents(templatePath, projectName);
    });
    var createDirectoryContents = function (templatePath, newProjectPath) {
        var SKIP_FILES = ["node_modules", ".template.json"];
        var filesToCreate = fs_1.readdirSync(templatePath);
        filesToCreate.forEach(function (file) {
            if (SKIP_FILES.indexOf(file) > -1) {
                return;
            }
            var origFilePath = templatePath + "/" + file;
            var stats = fs_1.statSync(origFilePath);
            if (stats.isFile()) {
                var contents = fs_1.readFileSync(origFilePath, "utf8");
                var writePath = CURR_DIR + "/" + newProjectPath + "/" + file;
                fs_1.writeFileSync(writePath, contents, "utf8");
            }
            else if (stats.isDirectory()) {
                fs_1.mkdirSync(CURR_DIR + "/" + newProjectPath + "/" + file);
                createDirectoryContents(templatePath + "/" + file, newProjectPath + "/" + file);
            }
        });
    };
};
