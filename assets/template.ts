import {pascalCase} from "change-case";
import * as dotenv from "dotenv";
import {render} from "ejs";
import {readFileSync, writeFileSync} from "fs";
import {Answers, prompt as inquirerPrompt, QuestionCollection, Separator} from "inquirer";
import * as moment from "moment";
// @ts-ignore
import * as recordTypes from "./types.json";

dotenv.config();

// Inquirer menu options
const inquirerMenu: QuestionCollection = [{
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
}];

// Start program
const program = inquirerPrompt(inquirerMenu);
program.then((answer: Answers) => {

    const today = moment(new Date());

    const templateFile = `assets/templates/${answer.type}.txt`;
    const fileName = `source/${process.env.FILE_PREFIX}_${answer.name}_${answer.type}.ts`;

    const content = readFileSync(templateFile, "utf8");

    writeFileSync(fileName, render(content, {

        // Generics
        date: today.format("MM/DD/YYYY"),

        // User
        user_name: process.env.USER_NAME,
        user_email: process.env.EMAIL,
        company_name: process.env.COMPANY_NAME,

        // Names
        namePascal: pascalCase(answer.name),

        // Details
        types: (answer.types && answer.types.length > 0) ? answer.types.join(",") : "None",
        description: answer.description,
        record_type: answer.record_type,
    }));
});