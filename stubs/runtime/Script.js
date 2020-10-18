(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Encapsulates the runtime settings of the currently executing script. */
    var Script = /** @class */ (function () {
        function Script() {
        }
        /** Returns the value of a script parameter for the currently executing script. */
        Script.prototype.getParameter = function (options) {
            if (options) {
                //
            }
            return "";
        };
        /** Returns a number value for the usage units remaining for the currently executing script. */
        Script.prototype.getRemainingUsage = function () {
            return 0;
        };
        ;
        return Script;
    }());
    exports.default = Script;
});
