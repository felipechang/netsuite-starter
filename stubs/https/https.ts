import ClientResponse from "../http/ClientResponse";
import SecretKey from "./SecretKey";
import SecureString from "./SecureString";

/**
 * SuiteScript https module (Server Side)
 *
 * @module N/https
 * @NApiVersion 2.x
 *
 */
class Https {

    /**
     * Enum for HTTP methods.
     * @enum {string}
     */
    public readonly Method = {
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
    public CacheDuration = {
        UNIQUE: "UNIQUE",
        SHORT: "SHORT",
        MEDIUM: "MEDIUM",
        LONG: "LONG",
    };

    /**
     * @enum {string}
     * @readonly
     */
    public RedirectType = {
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
    public Encoding = {
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
    public HashAlg = {
        SHA1: "SHA1",
        SHA256: "SHA256",
        SHA512: "SHA512",
        MD5: "MD5",
    };

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
    public get(options: any): ClientResponse {
        if (options) {
            //
        }
        return new ClientResponse();
    }

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
    public post(options: any): ClientResponse {
        if (options) {
            //
        }
        return new ClientResponse();
    }

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
    public put(options: any): ClientResponse {
        if (options) {
            //
        }
        return new ClientResponse();
    }

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
    public delete(options: any): ClientResponse {
        if (options) {
            //
        }
        return new ClientResponse();
    }

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
    public request(options: any): ClientResponse {
        if (options) {
            //
        }
        return new ClientResponse();
    }

    /**
     *
     * @param {Object} options
     * @param {string} options.guid
     * @param {string} options.encoding
     * @return {SecretKey}
     */
    public createSecretKey(options: any): SecretKey {
        if (options) {
            //
        }
        return new SecretKey();
    }

    /**
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {string} [options.inputEncoding] (Optional) defaults to UTF_8
     * @returns {SecureString}
     */
    public createSecureString(options: any): SecureString {
        if (options) {
            //
        }
        return new SecureString();
    }
}

export = new Https();
