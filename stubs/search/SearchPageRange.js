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
     * @class SearchPageRange
     * @classDescription Defines the page range to contain the result set
     * @protected
     * @constructor
     *
     * @since 2015.2
     */
    var SearchPageRange = /** @class */ (function () {
        function SearchPageRange() {
        }
        /**
         * @governance none
         * @return {number}
         *
         * @since 2015.2
         */
        SearchPageRange.prototype.getIndex = function () {
        };
        /**
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */
        SearchPageRange.prototype.getCompoundKey = function () {
        };
        /**
         * @governance none
         * @return {string}
         *
         * @since 2015.2
         */
        SearchPageRange.prototype.getCompoundLabel = function () {
        };
        return SearchPageRange;
    }());
    exports.default = SearchPageRange;
});
