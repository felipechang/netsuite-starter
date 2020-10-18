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
     * Return a new instance of search.Filter object.
     *
     * @classDescription Encapsulates a search filter used in a search.
     * @protected
     * @constructor
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_OPERATOR if an unknown operator is provided
     *
     * @since 2015.2
     */
    var Filter = /** @class */ (function () {
        function Filter() {
        }
        /**
         * Returns the object type name (search.Filter)
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */
        Filter.prototype.toString = function () {
        };
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */
        Filter.prototype.toJSON = function () {
        };
        return Filter;
    }());
    exports.default = Filter;
});
