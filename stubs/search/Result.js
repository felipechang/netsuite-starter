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
     * Return a new instance of search.Result object.
     *
     * @classDescription Encapsulation of a search result.
     * @protected
     * @constructor
     *
     * @since 2015.2
     */
    var Result = /** @class */ (function () {
        function Result() {
            /**
             * Record type of the result.
             * @name Result#recordType
             * @type {string}
             * @readonly
             * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
             *
             * @since 2015.2
             */
            this.recordType = undefined;
            /**
             * Record internal ID of the result.
             * @name Result#id
             * @type {number}
             * @readonly
             * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
             *
             * @since 2015.2
             */
            this.id = undefined;
            /**
             * List of columns contained in this result.
             * @name Result#columns
             * @type {Column[]}
             * @readonly
             * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
             *
             * @since 2015.2
             */
            this.columns = undefined;
        }
        /**
         * Returns the value of a specified search return column. The column may be specified in two ways:
         * 1) by providing a search.Column object
         * 2) by providing name, join and summary parameters
         * @governance none
         * @param {Column} column  The search result column from which to return a value.
         * - or -
         * @param {Object} options  the options object
         * @param {string} options.name  The search return column name.
         * @param {string} [options.join] optional The join id for this search return column.
         * @param {Summary} [options.summary]  The summary type for this column.
         * @param {string} [options.func] Special function for the search column.
         * @return {string} string value of the search result column
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT when name parameter is missing
         *
         * @since 2015.2
         */
        Result.prototype.getValue = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * Returns the UI display name (i.e. the text value) of a specified search return column.
         * Note that this method is supported on select, image and document fields only.
         * The column may be specified in two ways:
         * 1) by providing a search.Column object
         * 2) by providing name, join and summary parameters
         * @governance none
         * @param {Column} column  The search result column from which to return a value.
         * - or -
         * @param {Object} options  the options object
         * @param {string} options.name  The search return column name.
         * @param {string} [options.join] optional The join id for this search return column.
         * @param {Summary} [options.summary]  The summary type for this column.
         * @param {string} [options.func] Special function for the search column.
         * @return {string} UI display name (text value) of the search result column
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT when name parameter is missing
         *
         * @since 2015.2
         */
        Result.prototype.getText = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * Returns the object type name (search.Filter)
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */
        Result.prototype.toString = function () {
        };
        /**
         * get JSON format of the object
         * @governance none
         * @return {Object}
         *
         * @since 2015.2
         */
        Result.prototype.toJSON = function () {
        };
        return Result;
    }());
    exports.default = Result;
});
