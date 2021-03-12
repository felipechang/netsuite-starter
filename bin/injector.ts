import {pascalCase} from "change-case";
import {render} from "ejs";
import {existsSync, mkdirSync, readFileSync, writeFileSync} from "fs";
import {Answers} from "inquirer";
import * as moment from "moment";
import PromptUI = require("inquirer/lib/ui/prompt");

type AnswerPromise = Promise<any> & { ui: PromptUI; };

enum AnswerType {
    File,
    FolderFile,
    Library,
}

const getAnswerType = (answers: Answers): AnswerType => {

    const hasFolder = answers.type.indexOf("_") !== -1;

    switch (true) {
        case hasFolder && !answers.description:
            return AnswerType.Library;
        case hasFolder && !!answers.description:
            return AnswerType.FolderFile;
        default:
            return AnswerType.File;
    }

};

export const injectFiles = (program: AnswerPromise) => {

    program.then((answers: Answers) => {

        const today = moment(new Date());
        const answerType = getAnswerType(answers);

        answers.name = answers.name ? `_${answers.name.replace("None", "")}` : "";

        const templateFile = `${__dirname}/templates/${answers.type}.txt`;
        let fileName = `source/${process.env.FILE_PREFIX}${answers.name}_${answers.type}.ts`;

        if (answerType === AnswerType.Library || answerType === AnswerType.FolderFile) {

            const [folder, type] = answers.type.split("_");

            const name = answerType === AnswerType.Library ? "" : `_${answers.name}`;
            const typeName = answerType === AnswerType.Library ? `${type}_${folder}` : folder;

            fileName = `source/${folder}/${process.env.FILE_PREFIX}${name}_${typeName}.ts`;

            if (!existsSync(`source/${folder}`)) {
                mkdirSync(`source/${folder}`);
            }
        }

        fileName = fileName.replace(/___/g, "_");
        fileName = fileName.replace(/__/g, "_");

        const content = readFileSync(templateFile, "utf8");

        writeFileSync(fileName, render(content, {

            // Generics
            date: today.format("MM/DD/YYYY"),

            // User
            user_name: process.env.USER_NAME,
            user_email: process.env.EMAIL,
            company_name: process.env.COMPANY_NAME,

            // Names
            namePascal: answerType !== AnswerType.Library ? pascalCase(answers.name) : "",

            // Details
            types: (answerType !== AnswerType.Library && answers.types && answers.types.length > 0) ? answers.types.join(",") : "None",
            description: answerType !== AnswerType.Library ? answers.description : "",
            record_type: answerType !== AnswerType.Library ? answers.record_type : "",
        }));
    });
};