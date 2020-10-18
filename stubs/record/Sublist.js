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
     * Return a new instance of sublist object
     *
     * @param {Object} sublist
     * @param {string} sublist.type type of sublist
     * @param {SublistState} sublist.sublistState SublistState
    
     * @return {Sublist}
     * @constructor
     *
     * @since 2015.2
     */
    var Sublist = /** @class */ (function () {
        function Sublist() {
        }
        /**
         * The name of the sublist.
         * @name Sublist#name
         * @type string
         * @readonly
         */
        Sublist.prototype.getName = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * The type of the sublist.
         * @name Sublist#type
         * @type string
         * @readonly
         */
        Sublist.prototype.getType = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * The sublist is changed
         * @name Sublist#isChanged
         * @type boolean
         * @readonly
         */
        Sublist.prototype.isChanged = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * The sublist is hidden
         * @name Sublist#isHidden
         * @type boolean
         * @readonly
         */
        Sublist.prototype.isHidden = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * The sublist is display
         * @name Sublist#isDisplay
         * @type boolean
         * @readonly
         */
        Sublist.prototype.isDisplay = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * A flag to indicate whether or not the sublist supports multi-line buffer feature.
         * @name Sublist#isMultilineEditable
         * @type boolean
         * @readonly
         */
        Sublist.prototype.isMultilineEditable = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * get JSON format of the object
         * @return {{id: *, label: *, type: *}}
         *
         */
        Sublist.prototype.toJSON = function (options) {
            if (options) {
                //
            }
        };
        ;
        /**
         * @return {string}
         *
         */
        Sublist.prototype.toString = function (options) {
            if (options) {
                //
            }
        };
        ;
        return Sublist;
    }());
    exports.default = Sublist;
});
