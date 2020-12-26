(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "dotenv", "inquirer", "./injector"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeLibrary = void 0;
    var dotenv = require("dotenv");
    var inquirer_1 = require("inquirer");
    var injector_1 = require("./injector");
    exports.makeLibrary = function () {
        dotenv.config();
        var program = inquirer_1.prompt([{
                type: "list",
                name: "type",
                message: "Select library to import:",
                choices: [
                    { name: "Search", value: "lib_search" },
                    { name: "Empty", value: "lib_custom" },
                ]
            }]);
        injector_1.injectFiles(program);
    };
});
