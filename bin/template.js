(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "change-case", "dotenv", "ejs", "fs", "inquirer", "moment", "./types.json"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTemplate = void 0;
    var change_case_1 = require("change-case");
    var dotenv = require("dotenv");
    var ejs_1 = require("ejs");
    var fs_1 = require("fs");
    var inquirer_1 = require("inquirer");
    var moment = require("moment");
    // @ts-ignore
    var recordTypes = require("./types.json");
    exports.makeTemplate = function () {
        dotenv.config();
        var program = inquirer_1.prompt([{
                type: "list",
                name: "type",
                message: "Select script types to create:",
                choices: [
                    new inquirer_1.Separator("-- Native --"),
                    { name: "Bundle", value: "bundle" },
                    { name: "Client", value: "client" },
                    { name: "Client Form", value: "form" },
                    { name: "Map/Reduce", value: "mapreduce" },
                    { name: "Mass Update", value: "massupdate" },
                    { name: "Portlet", value: "portlet" },
                    { name: "Reslet", value: "restlet" },
                    { name: "Scheduled", value: "scheduled" },
                    { name: "Suitelet", value: "suitelet" },
                    { name: "User Event", value: "userevent" },
                    { name: "Workflow Action", value: "workflow" },
                    new inquirer_1.Separator("-- Auxiliary --"),
                    { name: "Bloc", value: "bloc" },
                    { name: "Configuration", value: "config" },
                    { name: "Model", value: "model" },
                    { name: "Repository", value: "repository" },
                    { name: "Static", value: "static" },
                    { name: "Utility", value: "util" },
                ]
            }, {
                type: "input",
                name: "name",
                message: "Enter script name:",
                default: function () {
                    return "Unnamed";
                },
                validate: function (s) {
                    var c = new RegExp("^[a-zA-Z_]*$");
                    var t = c.test(s);
                    if (!t) {
                        console.error("Must be snake case (name_of_file)");
                    }
                    return t;
                }
            }, {
                type: "checkbox",
                name: "types",
                choices: recordTypes,
                message: "Enter record types used:",
                when: function (answers) {
                    return [
                        "bloc",
                        "bundle",
                        "config",
                        "mapreduce",
                        "portlet",
                        "model",
                        "repository",
                        "scheduled",
                        "static",
                        "util",
                    ].indexOf(answers.type) === -1;
                }
            }, {
                type: "input",
                name: "description",
                message: "Enter description:",
                default: function () {
                    return "No description";
                }
            }, {
                type: "input",
                name: "record_type",
                message: "Enter record type:",
                when: function (answers) {
                    return answers.type === "repository";
                }
            }]);
        program.then(function (answers) {
            var today = moment(new Date());
            var templateFile = __dirname + "/templates/" + answers.type + ".txt";
            var fileName = "source/" + process.env.FILE_PREFIX + "_" + answers.name + "_" + answers.type + ".ts";
            var content = fs_1.readFileSync(templateFile, "utf8");
            fs_1.writeFileSync(fileName, ejs_1.render(content, {
                // Generics
                date: today.format("MM/DD/YYYY"),
                // User
                user_name: process.env.USER_NAME,
                user_email: process.env.EMAIL,
                company_name: process.env.COMPANY_NAME,
                // Names
                namePascal: change_case_1.pascalCase(answers.name),
                // Details
                types: (answers.types && answers.types.length > 0) ? answers.types.join(",") : "None",
                description: answers.description,
                record_type: answers.record_type,
            }));
        });
    };
});
