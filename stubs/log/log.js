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
    var Log = /** @class */ (function () {
        function Log() {
        }
        Log.prototype.debug = function () {
        };
        Log.prototype.audit = function () {
        };
        Log.prototype.error = function () {
        };
        Log.prototype.emergency = function () {
        };
        return Log;
    }());
    exports.default = new Log();
});
