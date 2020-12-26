(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./artifact", "./build", "./library", "./project", "./template"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PROCESS_OPTIONS = void 0;
    var artifact_1 = require("./artifact");
    var build_1 = require("./build");
    var library_1 = require("./library");
    var project_1 = require("./project");
    var template_1 = require("./template");
    exports.PROCESS_OPTIONS = [
        { name: "Create artifact", value: artifact_1.makeArtifact, parameter: "artifact" },
        { name: "Start build process", value: build_1.runBuild, parameter: "build" },
        { name: "New NetSuite project", value: project_1.makeProject, parameter: "project" },
        { name: "New NetSuite file", value: template_1.makeTemplate, parameter: "template" },
        { name: "Import Library", value: library_1.makeLibrary, parameter: "library" },
    ];
});
