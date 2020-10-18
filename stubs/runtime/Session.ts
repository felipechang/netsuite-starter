import {GetParameterOptions} from "./runtime";

interface SetOptions {
    /** Key used to store the runtime.Session. */
    name: string;
    /** Value to associate with the key in the user session. */
    value: string;
}

/** Encapsulates the user session for the currently executing script. */
class Session {
    /** Returns the user-defined session object value associated with the session object key. */
    get(options: GetParameterOptions): string {
        if (options) {
            //
        }

        return "";
    }
    /** Sets a key and value for a user-defined runtime.Session. */
    set(options: SetOptions): void {
        if (options) {
            //
        }
    }
}

export default Session;
