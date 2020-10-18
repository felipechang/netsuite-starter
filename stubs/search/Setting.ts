/**
 * Return a new instance of search.Setting object.
 *
 * @class Setting
 * @classDescription Defines a search setting.
 * @protected
 * @constructor
 *
 * @since 2018.2
 */
class Setting {

    /**
     * The name of the search parameter.
     * @name Setting#name
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2018.2
     */

    name = undefined;
    /**
     * The value of the search parameter.
     * @name Setting#value
     * @type {string}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2018.2
     */

    value = undefined;

    /**
     * Returns the object type name (search.Setting)
     * @governance none
     * @return {string}
     *
     * @since 2018.2
     */

    /**
     * Returns the object type name (search.Filter)
     * @governance none
     * @return {string}
     *
     * @since 2015.2
     */
    public toString(): any {

    }

    /**
     * get JSON format of the object
     * @governance none
     * @return {Object}
     *
     * @since 2015.2
     */
    public toJSON(): any {

    }
}

export default Setting;