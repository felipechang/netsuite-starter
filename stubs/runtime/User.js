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
    /** Enumeration that holds the user permission level for a specific permission ID. Returned by the User.getPermission(options) method. */
    var Permission;
    (function (Permission) {
        Permission["FULL"] = "FULL";
        Permission["EDIT"] = "EDIT";
        Permission["CREATE"] = "CREATE";
        Permission["VIEW"] = "VIEW";
        Permission["NONE"] = "NONE";
    })(Permission || (Permission = {}));
    /** Encapsulates the properties and preferences for the user of the currently executing script. */
    var User = /** @class */ (function () {
        function User() {
        }
        /** Returns a user permission level for the specified permission as a runtime.Permission enumeration. */
        User.prototype.getPermission = function (options) {
            if (options) {
                //
            }
            return Permission.NONE;
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
