/**
 *
 * @protected
 * @constructor
 */

class SecureString {

    /**
     *
     * @param {Object} options
     * @param {string} options.toEncoding
     * @returns {SecureString}
     */
    public convertEncoding(): any {
    };

    /**
     *
     * @param {Object} options
     * @param {string} options.input
     * @param {string} options.inputEncoding
     * @returns {SecureString}
     */
    public appendString(): any {
    };

    /**
     *
     * @param {Object} options
     * @param {SecureString} options.secureString
     * @returns {SecureString}
     */
    public appendSecureString(): any {
    };

    /**
     *
     * @param {Object} options
     * @param {string} options.algorithm
     * @returns {SecureString}
     */
    public hash(): any {
    };

    /**
     *
     * @param {Object}options
     * @param {string} options.algorithm
     * @param {SecretKey} options.key
     * @returns {SecureString}
     */
    public hmac(): any {
    };
}

export default SecureString;
