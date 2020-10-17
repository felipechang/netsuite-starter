#!/usr/bin/env node

import {Answers, prompt as inquirerPrompt} from "inquirer";
import {PROCESS_OPTIONS} from "./config";

const processes = PROCESS_OPTIONS.filter((option) => {
    return process.argv.indexOf(option.parameter) !== -1;
});

if (processes.length > 0) {
    processes[0].value();

} else {

    const program = inquirerPrompt([{
        type: "list",
        name: "program",
        message: "Select action:",
        choices: PROCESS_OPTIONS
    }]);
    program.then((answers: Answers) => {
        answers.program();
    });
}