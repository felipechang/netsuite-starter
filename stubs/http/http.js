(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ClientResponse"], factory);
    }
})(function (require, exports) {
    var ClientResponse_1 = require("./ClientResponse");
    /**
     * SuiteScript module
     *
     * @module N/http
     * @suiteScriptVersion 2.x
     *
     */
    var Http = /** @class */ (function () {
        function Http() {
            /**
             * Enum describing available HTTP methods. Holds the string value for supported HTTP requests.
             * This enum is used to set the value of http.request and ServerRequest.method
             */
            this.Method = {
                GET: "GET",
                POST: "POST",
                PUT: "PUT",
                DELETE: "DELETE",
                HEAD: "HEAD",
            };
            /**
             * Enum describing available Commerce API Cache Durations. Holds the string value for supported cache durations. This enum is used to set the value of the ServerResponse.setCdnCacheable property.
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
        }
        /**
         * Send a HTTP GET request and return a reponse from a server.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {string} options.url the HTTP URL being requested
         * @param {Object} options.headers (optional) The HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Http.prototype.get = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        /**
         * Send a HTTP POST request and return a reponse from a server.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {string} options.url the HTTP URL being requested
         * @param {string|Object} options.body The POST data
         * @param {Object} [options.headers] The HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Http.prototype.post = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        /**
         * Send a HTTP PUT request and return a reponse from a server.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {string} options.url the HTTP URL being requested
         * @param {string|Object} options.body The PUT data
         * @param {Object} [options.headers] The HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Http.prototype.put = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        /**
         * Send a HTTP DELETE request and return a reponse from a server.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {string} options.url the HTTP URL being requested
         * @param {Object} [options.headers] The HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Http.prototype.delete = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        /**
         * Send a HTTP request and return a response from a server.
         *
         * @governance 10 units
         * @restriction Server SuiteScript only
         *
         * @param {Object} options
         * @param {string} options.method The HTTP request method. Set using the http.Method enum.
         * @param {string} options.url the HTTP URL being requested
         * @param {string|Object} options.body The POST data; must be present if and only if method is POST
         * @param {Object} [options.headers] The HTTP headers
         * @return {ClientResponse}
         *
         * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT if a required argument is missing
         * @throws {SuiteScriptError} SSS_INVALID_URL if an incorrect protocol is used (ex: http in the HTTPS module)
         *
         * @since 2015.2
         */
        Http.prototype.request = function (options) {
            if (options) {
                //
            }
            return new ClientResponse_1.default();
        };
        return Http;
    }());
    return new Http();
});
