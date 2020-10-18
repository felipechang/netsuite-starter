/**
 * @protected
 * @constructor
 */
class Field {

    /**
     * Return label of the field
     * @name Field#label
     * @type string
     * @readonly
     * @since 2015.2
     */

    label = undefined;
    /**
     * Return id of the field
     * @name Field#id
     * @type string
     * @readonly
     * @since 2015.2
     */

    id = undefined;
    /**
     * Disabled state of the field
     * @name Field#isDisabled
     * @type boolean
     * @since 2015.2
     */

    isDisabled = undefined;
    /**
     * Display state of the field
     * @name Field#isDisplay
     * @type boolean
     * @since 2015.2
     */

    isDisplay = undefined;
    /**
     * Mandatory state of the field
     * @name Field#isMandatory
     * @type boolean
     * @since 2015.2
     */

    isMandatory = undefined;
    /**
     * Read Only state of the field
     * @name Field#isReadOnly
     * @type boolean
     * @since 2015.2
     */

    isReadOnly = undefined;
    /**
     * Visible state of the field
     * @name Field#isVisible
     * @type boolean
     * @since 2015.2
     */

    isVisible = undefined;
    /**
     * Return type of the field
     * @name Field#type
     * @type string
     * @readonly
     * @since 2015.2
     */

    type = undefined;
    /**
     * Return the sublistId of the field
     * @name Field#sublistId
     * @type string
     * @readonly
     * @since 2015.2
     */

    sublistId = undefined;
    /**
     * Returns if the field is a popup
     * @name Field#isPopup
     * @type boolean
     * @readonly
     * @since 2015.2
     */

    isPopup = undefined;

    /**
     * get JSON format of the object
     * @return {{id: *, label: *, type: *}}
     *
     */

    toJSON(options: any): any {
        if (options) {
            //
        }
    };

    /**
     * @return {string}
     *
     */

    toString(options: any): any {
        if (options) {
            //
        }
    };
}

export default Field;
