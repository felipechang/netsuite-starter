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

class SecretKey {

    /**
     * The GUID associated with the secret key.
     * @name SecretKey#guid
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     *
     * @since 2015.2
     */
    public guid: undefined;

    /**
     * The encoding used for the clear text value of the secret key.
     * @name SecretKey#encoding
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY_PROPERTY when setting the property is attempted
     *
     * @since 2015.2
     */
    public encoding: undefined;

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

export default SecretKey;