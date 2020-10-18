/**
 * Encapsulates the response of an HTTP client request (i.e., the return type for http.delete(options), http.get(options), http.post(options), http.put(options), http.request(options), and corresponding promise methods).
 *
 * @protected
 * @classDescription Encapsulation of the response returned by a web server as a response to our HTTP request.
 * @return {http.ClientResponse}
 * @constructor
 *
 * @since 2015.2
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
    var ClientResponse = /** @class */ (function () {
        function ClientResponse() {
        }
        /**
         * Returns the object type name (http.ClientResponse)
         * @governance none
         * @returns {string}
         *
         * @since 2015.2
         */
        ClientResponse.prototype.toString = function () {
        };
        /**
         * get JSON format of the object
         * @governance none
         * @returns {{type: string, code: *, headers: *, body: *}}
         *
         * @since 2015.2
         */
        ClientResponse.prototype.toJSON = function () {
        };
        return ClientResponse;
    }());
    exports.default = ClientResponse;
});
