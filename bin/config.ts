import {makeArtifact} from "./artifact";
import {runBuild} from "./build";
import {makeProject} from "./project";
import {makeTemplate} from "./template";

export const PROCESS_OPTIONS = [
    {name: "Create artifact", value: makeArtifact, parameter: "artifact"},
    {name: "Start build process", value: runBuild, parameter: "build"},
    {name: "New NetSuite project", value: makeProject, parameter: "project"},
    {name: "New NetSuite file", value: makeTemplate, parameter: "template"},
];