import {Data, render} from "ejs";
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
        type: "list",
        name: "project-type",
        message: "Enter project type:",
        choices: [
            {name: "Account Customization", value: "ACP"},
            {name: "SuiteApp", value: "SUITEAPP"},
        ]
    }, {
        type: "input",
        name: "project-id",
        message: "Enter project ID:",
        when: (answers) => {
            return answers["project-type"] === "SUITEAPP";
        },
        validate: (input): string | boolean => {
            if (/^([a-z0-9])+$/.test(input) && input.length < 40) {
                return true;
            }

            return "May only include letters and numbers with less than 40 characters";
        }
    }, {
        type: "input",
        name: "project-version",
        message: "Enter project ID:",
        when: (answers) => {
            return answers["project-type"] === "SUITEAPP";
        },
        validate: (input): string | boolean => {
            if (/^([0-9.])+$/.test(input)) {
                return true;
            }

            return "May only include numbers";
        }
    }, {
        type: "input",
        name: "publisher-id",
        message: "Enter publisher ID [com.netsuite]:",
        when: (answers) => {
            return answers["project-type"] === "SUITEAPP";
        },
        validate: (input): string | boolean => {
            if (/^([a-z.])+$/.test(input)) {
                return true;
            }

            return "May only include letters";
        }
    }, {
        type: "input",
        name: "author-name",
        message: "Enter author name:",
        validate: (input): string | boolean => {
            if (/^([A-Za-z\- ])+$/.test(input)) {
                return true;
            }

            return "May only include letters and hashes";
        }
    }, {
        type: "input",
        name: "author-email",
        message: "Enter author email:",
        validate: (input): string | boolean => {
            if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input)) {
                return true;
            }

            return "Must be a valid email";
        }
    }, {
        type: "input",
        name: "company-name",
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

        const data = {
            projectName: answers["project-name"],
            projectType: answers["project-type"],
            authorName: answers["author-name"],
            authorEmail: answers["author-email"],
            companyName: answers["company-name"],
            filePrefix: answers["project-prefix"],
            projectId: answers["project-id"],
            projectVersion: answers["project-version"],
            publisherId: answers["publisher-id"],
        };

        mkdirSync(`${CURR_DIR}/${data.projectName}`);

        createDirectoryContents(`${__dirname}/project`, data.projectName, data);

        const partialPath = `${__dirname}/partials/${data.projectType}`;

        if (data.projectType === "ACP") {
            createDirectoryContents(partialPath, `${data.projectName}/source`, data);
        }

        if (data.projectType === "SUITEAPP") {
            const project = `${data.publisherId}.${data.projectId}`;
            mkdirSync(`${CURR_DIR}/${data.projectName}/source/${project}`);
            createDirectoryContents(partialPath, `${data.projectName}/source/${project}`, data);
            mkdirSync(`${CURR_DIR}/${data.projectName}/source/${project}/src/FileCabinet/SuiteApps/${project}`);
        }
    });

    const createDirectoryContents = (path: string, name: string, data: Data) => {

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