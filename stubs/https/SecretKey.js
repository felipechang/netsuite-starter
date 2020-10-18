/**
 * Returns a new instance of SecretKey used for hmac, cipher and decipher
 *
 * @protected
 * @class
 * @classdesc
 * @param guid
 * @param encoding
 * @return {crypto.SecretKey}
 *
 * @constructor
 */
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
    var SecretKey = /** @class */ (function () {
        function SecretKey() {
        }
        /**
         * Returns the object type name (http.ClientResponse)
         * @governance none
         * @returns {string}
         *
         * @since 2015.2
         */
        SecretKey.prototype.toString = function () {
        };
        /**
         * get JSON format of the object
         * @governance none
         * @returns {{type: string, code: *, headers: *, body: *}}
         *
         * @since 2015.2
         */
        SecretKey.prototype.toJSON = function () {
        };
        return SecretKey;
    }());
    exports.default = SecretKey;
});
