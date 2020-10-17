exports.__esModule = true;
exports.runBuild = void 0;
var child_process_1 = require("child_process");
exports.runBuild = function () {
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
    sequentialExecution("npm test", "tslint source/**/*.ts", "tsc", "node bin/artifact.js");
};
