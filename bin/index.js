#!/usr/bin/env node
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "inquirer", "./config"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var inquirer_1 = require("inquirer");
    var config_1 = require("./config");
    var processes = config_1.PROCESS_OPTIONS.filter(function (option) {
        return process.argv.indexOf(option.parameter) !== -1;
    });
    if (processes.length > 0) {
        processes[0].value();
    }
    else {
        var program = inquirer_1.prompt([{
                type: "list",
                name: "program",
                message: "Select action:",
                choices: config_1.PROCESS_OPTIONS
            }]);
        program.then(function (answers) {
            answers.program();
        });
    }
});
