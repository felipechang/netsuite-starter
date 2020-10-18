/**
 *
 * @protected
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
    var SecureString = /** @class */ (function () {
        function SecureString() {
        }
        /**
         *
         * @param {Object} options
         * @param {string} options.toEncoding
         * @returns {SecureString}
         */
        SecureString.prototype.convertEncoding = function () {
        };
        ;
        /**
         *
         * @param {Object} options
         * @param {string} options.input
         * @param {string} options.inputEncoding
         * @returns {SecureString}
         */
        SecureString.prototype.appendString = function () {
        };
        ;
        /**
         *
         * @param {Object} options
         * @param {SecureString} options.secureString
         * @returns {SecureString}
         */
        SecureString.prototype.appendSecureString = function () {
        };
        ;
        /**
         *
         * @param {Object} options
         * @param {string} options.algorithm
         * @returns {SecureString}
         */
        SecureString.prototype.hash = function () {
        };
        ;
        /**
         *
         * @param {Object}options
         * @param {string} options.algorithm
         * @param {SecretKey} options.key
         * @returns {SecureString}
         */
        SecureString.prototype.hmac = function () {
        };
        ;
        return SecureString;
    }());
    exports.default = SecureString;
});
