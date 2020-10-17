#!/usr/bin/env node

import {Answers, prompt as inquirerPrompt} from "inquirer";
import {makeArtifact} from "./artifact";
import {runBuild} from "./build";
import {makeProject} from "./project";
import {makeTemplate} from "./template";

const PROCESS_OPTIONS = [
    {name: "Create artifact", value: makeArtifact, parameter: "artifact"},
    {name: "Start build process", value: runBuild, parameter: "build"},
    {name: "New NetSuite project", value: makeProject, parameter: "project"},
    {name: "New NetSuite file", value: makeTemplate, parameter: "template"},
];

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