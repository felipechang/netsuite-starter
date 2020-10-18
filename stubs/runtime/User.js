(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./runtime"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var runtime_1 = require("./runtime");
    /** Encapsulates the properties and preferences for the user of the currently executing script. */
    var User = /** @class */ (function () {
        function User() {
        }
        /** Returns a user permission level for the specified permission as a runtime.Permission enumeration. */
        User.prototype.getPermission = function (options) {
            if (options) {
                //
            }
            return runtime_1.Permission.NONE;
        };
        /** Returns the value of a NetSuite preference. */
        User.prototype.getPreference = function (options) {
            if (options) {
                //
            }
            return "";
        };
        return User;
    }());
    exports.default = User;
});
