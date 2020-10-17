import {exec} from "child_process";

export const runBuild = (): void => {

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

    sequentialExecution(
        "npm test",
        "tslint source/**/*.ts",
        "tsc",
        "node bin/artifact.js",
    );
};