import {pascalCase} from "change-case";
import {render} from "ejs";
import {existsSync, mkdirSync, readFileSync, writeFileSync} from "fs";
import {Answers} from "inquirer";
import * as moment from "moment";
import PromptUI = require("inquirer/lib/ui/prompt");

export const injectFiles = (program: Promise<any> & { ui: PromptUI; }) => {

    program.then((answers: Answers) => {

        const today = moment(new Date());

        const [folder, type] = answers.type.split("_");
        const name = answers.name ? `_${answers.name}` : "";

        const typeName = folder ? `${type}_${folder}` : type;
        const folderName = folder ? `/${folder}/` : "/";

        const templateFile = `${__dirname}/templates/${answers.type}.txt`;
        const fileName = `source${folderName}${process.env.FILE_PREFIX}${name}_${typeName}.ts`;

        if (!existsSync(`source/${folder}`)) {
            mkdirSync(`source/${folder}`);
        }

        const content = readFileSync(templateFile, "utf8");

        writeFileSync(fileName, render(content, {

            // Generics
            date: today.format("MM/DD/YYYY"),

            // User
            user_name: process.env.USER_NAME,
            user_email: process.env.EMAIL,
            company_name: process.env.COMPANY_NAME,

            // Names
            namePascal: answers.name ? pascalCase(answers.name) : "",

            // Details
            types: (answers.types && answers.types.length > 0) ? answers.types.join(",") : "None",
            description: answers.description ? answers.description : "",
            record_type: answers.record_type ? answers.record_type : "",
        }));
    });
};