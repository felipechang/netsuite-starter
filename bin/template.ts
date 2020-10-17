import {pascalCase} from "change-case";
import * as dotenv from "dotenv";
import {render} from "ejs";
import {readFileSync, writeFileSync} from "fs";
import {Answers, prompt as inquirerPrompt, Separator} from "inquirer";
import * as moment from "moment";
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
            {name: "Bloc", value: "bloc"},
            {name: "Configuration", value: "config"},
            {name: "Model", value: "model"},
            {name: "Repository", value: "repository"},
            {name: "Static", value: "static"},
            {name: "Utility", value: "util"},
        ]
    }, {
        type: "input",
        name: "name",
        message: "Enter script name:",
        default(): string {
            return "Unnamed";
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
                "bloc",
                "bundle",
                "config",
                "mapreduce",
                "portlet",
                "model",
                "repository",
                "scheduled",
                "static",
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
            return answers.type === "repository";
        }
    }]);

    program.then((answers: Answers) => {

        const today = moment(new Date());

        const templateFile = `${__dirname}/templates/${answers.type}.txt`;
        const fileName = `source/${process.env.FILE_PREFIX}_${answers.name}_${answers.type}.ts`;

        const content = readFileSync(templateFile, "utf8");

        writeFileSync(fileName, render(content, {

            // Generics
            date: today.format("MM/DD/YYYY"),

            // User
            user_name: process.env.USER_NAME,
            user_email: process.env.EMAIL,
            company_name: process.env.COMPANY_NAME,

            // Names
            namePascal: pascalCase(answers.name),

            // Details
            types: (answers.types && answers.types.length > 0) ? answers.types.join(",") : "None",
            description: answers.description,
            record_type: answers.record_type,
        }));
    });
};