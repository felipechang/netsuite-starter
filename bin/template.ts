import * as dotenv from "dotenv";
import {prompt as inquirerPrompt, Separator} from "inquirer";
import {injectFiles} from "./injector";

// @ts-ignore
import * as recordTypes from "./types.json";

export const makeTemplate = () => {

    dotenv.config();

    const program = inquirerPrompt([{
        type: "list",
        name: "type",
        message: "Select script types to create:",
        choices: [
            new Separator("-- Native --"),
            {name: "Bundle", value: "bundle"},
            {name: "Client", value: "client"},
            {name: "Client Form", value: "form"},
            {name: "Map/Reduce", value: "mapreduce"},
            {name: "Mass Update", value: "massupdate"},
            {name: "Portlet", value: "portlet"},
            {name: "Reslet", value: "restlet"},
            {name: "Scheduled", value: "scheduled"},
            {name: "Suitelet", value: "suitelet"},
            {name: "User Event", value: "userevent"},
            {name: "Workflow Action", value: "workflow"},
            new Separator("-- Auxiliary --"),
            {name: "Bloc", value: "bloc_bloc"},
            {name: "Configuration", value: "config"},
            {name: "Repository", value: "repository_repo"},
            {name: "Static", value: "static_static"},
            {name: "Types", value: "types"},
            {name: "Utility", value: "util"},
        ]
    }, {
        type: "input",
        name: "name",
        message: "Enter script name:",
        default(): string {
            return "None";
        },
        validate(s): boolean {

            const c = new RegExp("^[a-zA-Z_]*$");
            const t = c.test(s);

            if (!t) {
                console.error("Must be snake case (name_of_file)");
            }

            return t;
        }
    }, {
        type: "checkbox",
        name: "types",
        choices: recordTypes,
        message: "Enter record types used:",
        when: (answers) => {
            return [
                "bloc_bloc",
                "bundle",
                "config",
                "mapreduce",
                "portlet",
                "repository_repo",
                "scheduled",
                "static_static",
                "util",
            ].indexOf(answers.type) === -1;
        }
    }, {
        type: "input",
        name: "description",
        message: "Enter description:",
        default(): string {
            return "No description";
        }
    }, {
        type: "input",
        name: "record_type",
        message: "Enter record type:",
        when: (answers) => {
            return answers.type === "repository_repo";
        }
    }]);

    injectFiles(program);
};