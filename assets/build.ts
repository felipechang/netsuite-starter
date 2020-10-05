import {exec} from "child_process";

const sequentialExecution = (...commands: string[]): void => {

    if (commands.length === 0) {
        return;
    }

    for (let i = 0; i < commands.length; i++) {
        exec(commands[i], (error) => {
            if (error) {
                throw error;
            }
        });
    }
};

// Will execute the commands in series
sequentialExecution(
    "npm test",
    "tslint source/**/*.ts",
    "tsc",
    "node assets/artifact.js",
);