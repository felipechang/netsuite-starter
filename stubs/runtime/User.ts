interface GetParameterOptions {
    /** The name of the script parameter. */
    name: string;
}

/** Enumeration that holds the user permission level for a specific permission ID. Returned by the User.getPermission(options) method. */
enum Permission {
    FULL = "FULL",
    EDIT = "EDIT",
    CREATE = "CREATE",
    VIEW = "VIEW",
    NONE = "NONE",
}

/** Encapsulates the properties and preferences for the user of the currently executing script. */
class User {

    /** Returns a user permission level for the specified permission as a runtime.Permission enumeration. */
    getPermission(options: GetParameterOptions): Permission {
        if (options) {
            //
        }

        return Permission.NONE;
    }

    /** Returns the value of a NetSuite preference. */
    getPreference(options: GetParameterOptions): string {
        if (options) {
            //
        }

        return "";
    }

    /** The internal ID of the department for the currently logged-in user. */
    department: number | undefined;
    /** The email address of the currently logged-in user. */
    email: string | undefined;
    /** The internal ID of the currently logged-in user. */
    id: number | undefined;
    /** The internal ID of the location of the currently logged-in user. */
    location: number | undefined;
    /** The name of the currently logged-in user. */
    name: string | undefined;
    /** The internal ID of the role for the currently logged-in user. */
    role: number | undefined;
    /** The script ID of the center type, or role center, for the currently logged-in user.
     *  NOTE: The actual behavior of this strays from the documentation. This in practice returns the script id
     *  of the role center as opposed to its internal id. That is why the return type is string | number instead of
     *  what the documentation claims (just number).
     */
    roleCenter: string | number | undefined;
    /** The custom scriptId of the role for the currently logged-in user. */
    roleId: string | undefined;
    /** The internal ID of the subsidiary for the currently logged-in user. */
    subsidiary: number | undefined;
}

export default User;