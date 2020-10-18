(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../http/ClientResponse", "./SecretKey", "./SecureString"], factory);
    }
})(function (require, exports) {
    var ClientResponse_1 = require("../http/ClientResponse");
    var SecretKey_1 = require("./SecretKey");
    var SecureString_1 = require("./SecureString");
    /**
     * SuiteScript https module (Server Side)
     *
     * @module N/https
     * @NApiVersion 2.x
     *
     */
    var Https = /** @class */ (function () {
        function Https() {
            /**
             * Enum for HTTP methods.
             * @enum {string}
             */
            this.Method = {
                GET: "GET",
                POST: "POST",
                PUT: "PUT",
                DELETE: "DELETE",
                HEAD: "HEAD",
            };
            /**
             * Enum describing available Commerce API Cache Durations.
             * @enum {string}
             * @readonly
             */
            this.CacheDuration = {
                UNIQUE: "UNIQUE",
                SHORT: "SHORT",
                MEDIUM: "MEDIUM",
                LONG: "LONG",
            };
            /**
             * @enum {string}
             * @readonly
             */
            this.RedirectType = {
                RECORD: "RECORD",
                SUITELET: "SUITELET",
                RESTLET: "RESTLET",
                MEDIA_ITEM: "MEDIAITEM",
                TASK_LINK: "TASKLINK",
            };
            /**
             * @enum {string}
             * @readonly
             */
            this.Encoding = {
                UTF_8: "UTF_8",
                BASE_16: "BASE_16",
                BASE_32: "BASE_32",
                BASE_64: "BASE_64",
                BASE_64_URL_SAFE: "BASE_64_URL_SAFE",
                HEX: "HEX",
            };
            /**
             * @enum {string}
             * @readonly
             */
            this.HashAlg = {
                SHA1: "SHA1",
                SHA256: "SHA256",
                SHA512: "SHA512",
                MD5: "MD5",
            };
        }
        /**
         * Send a HTTPS GET request and return server response.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {string} options.url the HTTP URL being requested
         * @param {Object} options.headers (optional) request HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Https.prototype.get = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        /**
         * Send a HTTPS POST request and return server response.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {string} options.url the HTTP URL being requested
         * @param {string|Object} options.body POST data
         * @param {Object} options.headers (optional) request HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Https.prototype.post = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        /**
         * Send a HTTPS PUT request and return server response.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {string} options.url the HTTP URL being requested
         * @param {string|Object} options.body PUT data
         * @param {Object} options.headers (optional) request HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Https.prototype.put = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        /**
         * Send a HTTPS DELETE request and return server response.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {string} options.url the HTTP URL being requested
         * @param {Object} options.headers (optional) request HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Https.prototype.delete = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        /**
         * Send a HTTP request and return server response.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {http.Method} options.method HTTP method of the request
         * @param {string} options.url the HTTP URL being requested
         * @param {string|Object} options.body POST data; must be present if and only if method is POST
         * @param {Object} options.headers (optional) request HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required parameter is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Https.prototype.request = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        /**
         *
         * @param {Object} options
         * @param {string} options.guid
         * @param {string} options.encoding
         * @return {SecretKey}
         */
        Https.prototype.createSecretKey = function (options) {
            if (options) {
                //
            }
            return new SecretKey_1.default();
        };
        /**
         *
         * @param {Object} options
         * @param {string} options.input
         * @param {string} [options.inputEncoding] (Optional) defaults to UTF_8
         * @returns {SecureString}
         */
        Https.prototype.createSecureString = function (options) {
            if (options) {
                //
            }
            return new SecureString_1.default();
        };
        return Https;
    }());
    return new Https();
});
