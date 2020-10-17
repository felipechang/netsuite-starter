import {mkdirSync, readdirSync, readFileSync, statSync, writeFileSync} from "fs";
import {Answers, prompt as inquirerPrompt} from "inquirer";

export const makeProject = (): void => {

    const CURR_DIR = process.cwd();
    const program = inquirerPrompt([{
        type: "input",
        name: "project-name",
        message: "Enter project name:",
        validate: (input): string | boolean => {
            if (/^([A-Za-z\-_\d])+$/.test(input)) {
                return true;
            }

            return "Name may only include letters, numbers, underscores and hashes";
        }
    }]);

    program.then((answers: Answers) => {

        const projectName = answers["project-name"];
        const templatePath = `${__dirname}/project`;

        mkdirSync(`${CURR_DIR}/${projectName}`);

        createDirectoryContents(templatePath, projectName);
    });

    const createDirectoryContents = (templatePath: string, newProjectPath: string) => {

        const SKIP_FILES = ["node_modules", ".template.json"];

        const filesToCreate = readdirSync(templatePath);

        filesToCreate.forEach((file) => {

            if (SKIP_FILES.indexOf(file) > -1) {
                return;
            }

            const origFilePath = `${templatePath}/${file}`;
            const stats = statSync(origFilePath);

            if (stats.isFile()) {

                const contents = readFileSync(origFilePath, "utf8");
                const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;

                writeFileSync(writePath, contents, "utf8");

            } else if (stats.isDirectory()) {
                mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
                createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
            }
        });
    };
};