(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "child_process"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var child_process_1 = require("child_process");
    var sequentialExecution = function () {
        var commands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            commands[_i] = arguments[_i];
        }
        if (commands.length === 0) {
            return;
        }
        for (var i = 0; i < commands.length; i++) {
            child_process_1.exec(commands[i], function (error) {
                if (error) {
                    throw error;
                }
            });
        }
    };
    // Will execute the commands in series
    sequentialExecution("tslint source/**/*.ts", "tsc", "node assets/artifact.js");
});
