(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Script", "./Session", "./User"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Permission = void 0;
    var Script_1 = require("./Script");
    var Session_1 = require("./Session");
    var User_1 = require("./User");
    /** Enumeration that holds the context information about what triggered the current script. Returned by the runtime.executionContext property of the N/runtime Module. */
    var ContextType;
    (function (ContextType) {
        ContextType["ACTION"] = "ACTION";
        ContextType["BUNDLE_INSTALLATION"] = "BUNDLE_INSTALLATION";
        ContextType["CLIENT"] = "CLIENT";
        ContextType["CONSOLRATEADJUSTOR"] = "CONSOLRATEADJUSTOR";
        ContextType["CSV_IMPORT"] = "CSV_IMPORT";
        ContextType["CUSTOMGLLINES"] = "CUSTOMGLLINES";
        ContextType["CUSTOM_MASSUPDATE"] = "CUSTOM_MASSUPDATE";
        ContextType["DEBUGGER"] = "DEBUGGER";
        ContextType["EMAIL_CAPTURE"] = "EMAIL_CAPTURE";
        ContextType["MAP_REDUCE"] = "MAP_REDUCE";
        ContextType["PAYMENTGATEWAY"] = "PAYMENTGATEWAY";
        ContextType["PORTLET"] = "PORTLET";
        ContextType["PROMOTIONS"] = "PROMOTIONS";
        ContextType["RESTLET"] = "RESTLET";
        ContextType["SCHEDULED"] = "SCHEDULED";
        ContextType["SHIPPING_PARTNERS"] = "SHIPPING_PARTNERS";
        ContextType["SUITELET"] = "SUITELET";
        ContextType["TAX_CALCULATION"] = "TAX_CALCULATION";
        ContextType["USEREVENT"] = "USEREVENT";
        ContextType["USER_INTERFACE"] = "USER_INTERFACE";
        ContextType["WEBAPPLICATION"] = "WEBAPPLICATION";
        ContextType["WEBSERVICES"] = "WEBSERVICES";
        ContextType["WEBSTORE"] = "WEBSTORE";
        ContextType["WORKFLOW"] = "WORKFLOW";
    })(ContextType || (ContextType = {}));
    /** Enumeration that holds all possible environment types that the current script can execute in. */
    var EnvType;
    (function (EnvType) {
        EnvType["SANDBOX"] = "SANDBOX";
        EnvType["PRODUCTION"] = "PRODUCTION";
        EnvType["BETA"] = "BETA";
        EnvType["INTERNAL"] = "INTERNAL";
    })(EnvType || (EnvType = {}));
    /** Enumeration that holds the user permission level for a specific permission ID. Returned by the User.getPermission(options) method. */
    var Permission;
    (function (Permission) {
        Permission["FULL"] = "FULL";
        Permission["EDIT"] = "EDIT";
        Permission["CREATE"] = "CREATE";
        Permission["VIEW"] = "VIEW";
        Permission["NONE"] = "NONE";
    })(Permission = exports.Permission || (exports.Permission = {}));
    var runtime = /** @class */ (function () {
        function runtime() {
        }
        /** Returns a runtime.Script that represents the currently executing script. */
        runtime.prototype.getCurrentScript = function () {
            return new Script_1.default();
        };
        ;
        /** Returns a runtime.Session that represents the user session for the currently executing script. */
        runtime.prototype.getCurrentSession = function () {
            return new Session_1.default();
        };
        ;
        /** Returns a runtime.User that represents the properties and preferences for the user of the currently executing script. */
        runtime.prototype.getCurrentUser = function () {
            return new User_1.default();
        };
        ;
        /** Use this method to determine if a particular feature is enabled in a NetSuite account. These are the features that appear on the Enable Features page at Setup > Company > Setup Tasks > Enable Features. */
        runtime.prototype.isFeatureInEffect = function (options) {
            if (options) {
                //
            }
            return false;
        };
        ;
        return runtime;
    }());
    exports.default = new runtime();
});
