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
     * Return a new instance of search.Column object.
     *
     * @classDescription Encapsulates a single search column in a search.Search. Use the methods and properties available to the Column object to get or set Column properties.
     * @protected
     * @constructor
     * @throws {SuiteScriptError} SSS_INVALID_SRCH_COLUMN_SUM if an unknown summary type is provided
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT when name parameter is missing
     *
     * @since 2015.2
     */
    var Column = /** @class */ (function () {
        function Column() {
        }
        /**
         * Returns the search column for which the minimal or maximal value should be found when returning the search.Column
         * value. For example, can be set to find the most recent or earliest date, or the largest or smallest amount for a
         * record, and then the search.Column value for that record is returned. Can only be used when summary type is MIN
         * or MAX.
         * @governance none
         * @param {Object} options  the options object
         * @param {string} options.name The name of the search column for which the minimal or maximal value should be found.
         * @param {string} options.join The join id for the search column.
         * @return {Column} this search column
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT when name or join parameter is missing
         *
         * @since 2015.2
         */
        Column.prototype.setWhenOrderedBy = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * Returns the object type name (search.Column)
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */
        Column.prototype.toString = function () {
        };
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */
        Column.prototype.toJSON = function () {
        };
        return Column;
    }());
    exports.default = Column;
});
