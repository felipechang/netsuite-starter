(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "change-case", "dotenv", "ejs", "fs", "inquirer", "moment"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var change_case_1 = require("change-case");
    var dotenv = require("dotenv");
    var ejs_1 = require("ejs");
    var fs_1 = require("fs");
    var inquirer_1 = require("inquirer");
    var moment = require("moment");
    dotenv.config();
    // Inquirer menu options
    var inquirerMenu = [{
            type: "list",
            name: "type",
            message: "Select script types to create",
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
                { name: "Configuration", value: "config" },
                { name: "Repository", value: "repository" },
                { name: "Static", value: "static" },
            ]
        }, {
            type: "input",
            name: "record",
            message: "Enter record type",
            when: function (answers) {
                return answers.type === "static";
            }
        }, {
            type: "list",
            name: "custom",
            message: "Is this a custom record",
            choices: [
                { name: "Yes", value: true },
                { name: "No", value: false },
            ],
            when: function (answers) {
                return answers.type === "interface";
            }
        }, {
            type: "input",
            name: "name",
            message: "Enter script name",
            default: function () {
                return "Unnamed";
            },
            validate: function (s) {
                var c = new RegExp("^[a-zA-Z_]*$");
                var t = c.test(s);
                if (!t) {
                    console.error("\nMust be snake case (name_of_file)");
                }
                return t;
            }
        }, {
            type: "checkbox",
            name: "types",
            choices: [
                "customer",
                "lead",
                "prospect"
            ],
            message: "Enter record types used",
        }, {
            type: "input",
            name: "description",
            message: "Enter description",
            default: function () {
                return "No description";
            }
        }];
    // Start program
    var program = inquirer_1.prompt(inquirerMenu);
    program.then(function (answer) {
        var today = moment(new Date());
        var templateFile = "assets/templates/" + answer.type + ".txt";
        var fileName = "source/" + answer.name + "_" + answer.type + ".ts";
        var content = fs_1.readFileSync(templateFile, "utf8");
        fs_1.writeFileSync(fileName, ejs_1.render(content, {
            // Generics
            date: today.format("MM/DD/YYYY"),
            // User
            user_name: process.env.USER_NAME,
            user_email: process.env.EMAIL,
            company_name: process.env.COMPANY_NAME,
            // Names
            namePascal: change_case_1.pascalCase(answer.name),
            // Details
            types: (answer.types && answer.types.length > 0) ? answer.types.join(",") : "None",
            description: answer.description,
        }));
    });
});
