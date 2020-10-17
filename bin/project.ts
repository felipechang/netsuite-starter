import {render} from "ejs";
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

            return "May only include letters, numbers, underscores and hashes";
        }
    }, {
        type: "input",
        name: "project-author",
        message: "Enter author name:",
        validate: (input): string | boolean => {
            if (/^([A-Za-z\- ])+$/.test(input)) {
                return true;
            }

            return "May only include letters and hashes";
        }
    }, {
        type: "input",
        name: "project-email",
        message: "Enter author email:",
        validate: (input): string | boolean => {
            if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input)) {
                return true;
            }

            return "Must be a valid email";
        }
    }, {
        type: "input",
        name: "project-company",
        message: "Enter company name:",
    }, {
        type: "input",
        name: "project-prefix",
        message: "Enter file prefix:",
        validate: (input): string | boolean => {
            if (/^[A-Za-z]+$/.test(input) && input.length <= 5) {
                return true;
            }

            return "Prefix must be 5 letters or less";
        }
    },]);

    program.then((answers: Answers) => {

        const project = answers["project-name"];
        const author = answers["project-author"];
        const email = answers["project-email"];
        const company = answers["project-company"];
        const prefix = answers["project-prefix"];

        mkdirSync(`${CURR_DIR}/${project}`);

        createDirectoryContents(`${__dirname}/project`, project, {
            project,
            author,
            email,
            company,
            prefix,
        });
    });

    const createDirectoryContents = (path: string, name: string, data: any) => {

        const filesToCreate = readdirSync(path);

        filesToCreate.forEach((file) => {

            const origFilePath = `${path}/${file}`;
            const stats = statSync(origFilePath);

            if (stats.isFile()) {

                const contents = readFileSync(origFilePath, "utf8");
                const writePath = `${CURR_DIR}/${name}/${file}`;

                writeFileSync(writePath, render(contents, data), "utf8");

            } else if (stats.isDirectory()) {
                mkdirSync(`${CURR_DIR}/${name}/${file}`);
                createDirectoryContents(`${path}/${file}`, `${name}/${file}`, data);
            }
        });
    };
};