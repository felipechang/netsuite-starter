(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "dotenv", "inquirer", "./injector", "./types.json"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeLibrary = exports.makeTemplate = void 0;
    var dotenv = require("dotenv");
    var inquirer_1 = require("inquirer");
    var injector_1 = require("./injector");
    // @ts-ignore
    var recordTypes = require("./types.json");
    var makeTemplate = function () {
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
                    { name: "Bloc", value: "bloc_bloc" },
                    { name: "Configuration", value: "config" },
                    { name: "Repository", value: "repository_repo" },
                    { name: "Static", value: "static_static" },
                    { name: "Types", value: "types" },
                    { name: "Utility", value: "util" },
                ]
            }, {
                type: "input",
                name: "name",
                message: "Enter script name:",
                default: function () {
                    return "None";
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
                        "bloc_bloc",
                        "bundle",
                        "config",
                        "mapreduce",
                        "portlet",
                        "repository_repo",
                        "scheduled",
                        "static_static",
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
                    return answers.type === "repository_repo";
                }
            }]);
        injector_1.injectFiles(program);
    };
    exports.makeTemplate = makeTemplate;
    var makeLibrary = function () {
        dotenv.config();
        var program = inquirer_1.prompt([{
                type: "list",
                name: "type",
                message: "Select library to import:",
                choices: [
                    { name: "Browser", value: "lib_browser" },
                    { name: "Cache", value: "lib_cache" },
                    { name: "CSV", value: "lib_csv" },
                    { name: "Custom", value: "lib_custom" },
                    { name: "EDI", value: "lib_edi" },
                    { name: "Governance", value: "lib_governance" },
                    { name: "Search", value: "lib_search" },
                    { name: "Log", value: "lib_log" },
                    { name: "SFTP", value: "lib_sftp" },
                    { name: "Task", value: "lib_task" },
                ]
            }]);
        injector_1.injectFiles(program);
    };
    exports.makeLibrary = makeLibrary;
});
