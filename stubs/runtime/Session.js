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
    /** Encapsulates the user session for the currently executing script. */
    var Session = /** @class */ (function () {
        function Session() {
        }
        /** Returns the user-defined session object value associated with the session object key. */
        Session.prototype.get = function (options) {
            if (options) {
                //
            }
            return "";
        };
        /** Sets a key and value for a user-defined runtime.Session. */
        Session.prototype.set = function (options) {
            if (options) {
                //
            }
        };
        return Session;
    }());
    exports.default = Session;
});
