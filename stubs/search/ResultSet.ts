/**
 * Return a new instance of search.ResultSet object.
 *
 * @classDescription Encapsulation of a search result set.
 * @protected
 * @constructor
 *
 * @since 2015.2
 */
class ResultSet {

    /**
     * List of columns contained in this result set.
     * @name ResultSet#columns
     * @type {Column[]}
     * @readonly
     * @throws {SuiteScriptError} READ_ONLY when setting the property is attempted
     *
     * @since 2015.2
     */
    columns = undefined;

    /**
     * Retrieve a slice of the search result set. Only 1000 results can be returned at a time. If there are fewer results
     * available than requested, then the array will be truncated.
     * @governance 10 units
     * @param {Object} options  the options object
     * @param {number} options.start  the index number of the first result to return, inclusive
     * @param {number} options.end  the index number of the last result to return, exclusive
     * @return {Result[]} the requested slice of the search result set
     *
     * @throws {SuiteScriptError} SSS_MISSING_REQD_ARGUMENT when start or end parameters are missing
     *
     * @since 2015.2
     */

    getRange(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * Calls the developer-defined callback function for every result in this set. The result set processed by each()
     * may have maximum 4000 rows. The callback function has the following signature: boolean callback(result.Result
     * result); If the return value of the callback is false, the iteration over results is stopped, otherwise it
     * continues. Note that the work done in the context of the callback function counts towards the governance of the
     * script that called it.
     * @governance 10 units
     * @param {Function} callback  the function called for each result in the result set
     * @return {void}
     * @since 2015.2
     */

    each(callback: () => void): any {
        if (typeof callback) {
            //
        }
    };

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

export default ResultSet;
