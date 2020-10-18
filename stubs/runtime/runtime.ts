import Script from "./Script";
import Session from "./Session";
import User from "./User";

export interface GetParameterOptions {
    /** The name of the script parameter. */
    name: string;
}

interface FeatureOptions {
    /** The internal ID of the feature to check. */
    feature: string;
}

/** Enumeration that holds the context information about what triggered the current script. Returned by the runtime.executionContext property of the N/runtime Module. */
enum ContextType {
    ACTION = "ACTION",
    BUNDLE_INSTALLATION = "BUNDLE_INSTALLATION",
    CLIENT = "CLIENT",
    CONSOLRATEADJUSTOR = "CONSOLRATEADJUSTOR",
    CSV_IMPORT = "CSV_IMPORT",
    CUSTOMGLLINES = "CUSTOMGLLINES",
    CUSTOM_MASSUPDATE = "CUSTOM_MASSUPDATE",
    DEBUGGER = "DEBUGGER",
    EMAIL_CAPTURE = "EMAIL_CAPTURE",
    MAP_REDUCE = "MAP_REDUCE",
    PAYMENTGATEWAY = "PAYMENTGATEWAY",
    PORTLET = "PORTLET",
    PROMOTIONS = "PROMOTIONS",
    RESTLET = "RESTLET",
    SCHEDULED = "SCHEDULED",
    SHIPPING_PARTNERS = "SHIPPING_PARTNERS",
    SUITELET = "SUITELET",
    TAX_CALCULATION = "TAX_CALCULATION",
    USEREVENT = "USEREVENT",
    USER_INTERFACE = "USER_INTERFACE",
    WEBAPPLICATION = "WEBAPPLICATION",
    WEBSERVICES = "WEBSERVICES",
    WEBSTORE = "WEBSTORE",
    WORKFLOW = "WORKFLOW",
}

/** Enumeration that holds all possible environment types that the current script can execute in. */
enum EnvType {
    SANDBOX = "SANDBOX",
    PRODUCTION = "PRODUCTION",
    BETA = "BETA",
    INTERNAL = "INTERNAL",
}

/** Enumeration that holds the user permission level for a specific permission ID. Returned by the User.getPermission(options) method. */
export enum Permission {
    FULL = "FULL",
    EDIT = "EDIT",
    CREATE = "CREATE",
    VIEW = "VIEW",
    NONE = "NONE",
}

class runtime {

    /** The NetSuite account ID for the currently logged-in user. */
    accountId: string | undefined;
    /** The current environment in which the script is executing. This property returns one of the values from the runtime.EnvType enumeration. */
    envType: EnvType | undefined;
    /** Returns a runtime.ContextType enumeration that represents what triggered the current script. */
    executionContext: ContextType | undefined;
    /** The number of processors available to the currently logged in account.
     SuiteCloud Processors is the current system used to execute (process) scheduled scripts and map/reduce scripts. This property is helpful if you are a SuiteApp developer and your script needs to know the total number of processors available to a deployment.
     For scheduled script deployments that continue to use queues, use runtime.queueCount. With the introduction of SuiteCloud Processors, map/reduce script deployments and new scheduled script deployments no longer use queues, but pre-existing scheduled script deployments continue to use queues until the queues are removed (see SuiteCloud Processors – Supported Task Types).
     Be aware that the number of processors available may not be the same as the number of queues available. For more information, see SuiteCloud Plus Settings.
     */
    processorCount: number | undefined;
    /** Returns the number of scheduled script queues in a given account. */
    queueCount: number | undefined;
    /** Returns the version of NetSuite that the method is called in. For example, the  runtime.version property in an account running NetSuite 2015.2 is 2015.2. */
    version: string | undefined;

    /** Returns a runtime.Script that represents the currently executing script. */
    getCurrentScript(): Script {
        return new Script();
    };

    /** Returns a runtime.Session that represents the user session for the currently executing script. */
    getCurrentSession(): Session {
        return new Session();
    };

    /** Returns a runtime.User that represents the properties and preferences for the user of the currently executing script. */
    getCurrentUser(): User {
        return new User();
    };

    /** Use this method to determine if a particular feature is enabled in a NetSuite account. These are the features that appear on the Enable Features page at Setup > Company > Setup Tasks > Enable Features. */
    isFeatureInEffect(options: FeatureOptions): boolean {
        if (options) {
            //
        }

        return false;
    };
}

export default new runtime();