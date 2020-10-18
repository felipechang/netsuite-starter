interface GetParameterOptions {
    /** The name of the script parameter. */
    name: string;
}

/** Encapsulates the runtime settings of the currently executing script. */
class Script {
    /** Returns the value of a script parameter for the currently executing script. */
    getParameter(options: GetParameterOptions): boolean | number | Date | string | string[] {
        if (options) {
            //
        }

        return "";
    }

    /** Returns a number value for the usage units remaining for the currently executing script. */
    getRemainingUsage(): number {
        return 0;
    };

    /** The deployment ID for the script deployment on the currently executing script. */
    deploymentId: string | undefined;
    /** The script ID for the currently executing script. */
    id: string | undefined;
    /** The script logging level for the current script execution. This method is not supported on client scripts. */
    logLevel: string | undefined;
    /** The percent complete specified for the current scheduled script execution. The return value will appear in the % Complete column in the Scheduled Script Status page. */
    percentComplete: number | undefined;
    /** An Array of bundle IDs for the bundles that include the currently executing script. */
    bundleIds: string[] | undefined;
}

export default Script;