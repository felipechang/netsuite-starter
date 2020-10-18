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
    /**
     * Return a new instance of search.Setting object.
     *
     * @class Setting
     * @classDescription Defines a search setting.
     * @protected
     * @constructor
     *
     * @since 2018.2
     */
    var Setting = /** @class */ (function () {
        function Setting() {
            /**
             * The name of the search parameter.
             * @name Setting#name
             * @type {string}
             * @readonly
             * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
             *
             * @since 2018.2
             */
            this.name = undefined;
            /**
             * The value of the search parameter.
             * @name Setting#value
             * @type {string}
             * @readonly
             * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
             *
             * @since 2018.2
             */
            this.value = undefined;
        }
        /**
         * Returns the object type name (search.Setting)
         * @governance none
         * @return {string}
         *
         * @since 2018.2
         */
        /**
         * Returns the object type name (search.Filter)
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */
        Setting.prototype.toString = function () {
        };
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */
        Setting.prototype.toJSON = function () {
        };
        return Setting;
    }());
    exports.default = Setting;
});
