import * as dotenv from "dotenv";
import {prompt as inquirerPrompt} from "inquirer";
import {injectFiles} from "./injector";

export const makeLibrary = () => {

    dotenv.config();

    const program = inquirerPrompt([{
        type: "list",
        name: "type",
        message: "Select library to import:",
        choices: [
            {name: "Search", value: "lib_search"},
            {name: "Empty", value: "lib_custom"},
        ]
    }]);

    injectFiles(program);
};