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

class ClientResponse {

    /**
     * The client response code.
     * @name ClientResponse#code
     * @type number
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    public code: undefined;

    /**
     * The response headers.
     * @name ClientResponse#headers
     * @type Object
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    public headers: undefined;

    /**
     * The client response body.
     * @name ClientResponse#body
     * @type string
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     */
    public body: undefined;

    /**
     * Returns the object type name (http.ClientResponse)
     * @governance none
     * @returns {string}
     *
     * @since 2015.2
     */
    public toString(): any {

    }

    /**
     * get JSON format of the object
     * @governance none
     * @returns {{type: string, code: *, headers: *, body: *}}
     *
     * @since 2015.2
     */
    public toJSON(): any {

    }
}

export default ClientResponse;