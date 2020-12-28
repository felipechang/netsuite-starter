(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "change-case", "ejs", "fs", "moment"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.injectFiles = void 0;
    var change_case_1 = require("change-case");
    var ejs_1 = require("ejs");
    var fs_1 = require("fs");
    var moment = require("moment");
    var AnswerType;
    (function (AnswerType) {
        AnswerType[AnswerType["File"] = 0] = "File";
        AnswerType[AnswerType["FolderFile"] = 1] = "FolderFile";
        AnswerType[AnswerType["Library"] = 2] = "Library";
    })(AnswerType || (AnswerType = {}));
    var getAnswerType = function (answers) {
        var hasFolder = answers.type.indexOf("_") !== -1;
        switch (true) {
            case hasFolder && !answers.description:
                return AnswerType.Library;
            case hasFolder && !!answers.description:
                return AnswerType.FolderFile;
            default:
                return AnswerType.File;
        }
    };
    var injectFiles = function (program) {
        program.then(function (answers) {
            var today = moment(new Date());
            var answerType = getAnswerType(answers);
            answers.name = answers.name ? "_" + answers.name.replace("None", "") : "";
            var templateFile = __dirname + "/templates/" + answers.type + ".txt";
            var fileName = "source/" + process.env.FILE_PREFIX + answers.name + "_" + answers.type + ".ts";
            if (answerType === AnswerType.Library || answerType === AnswerType.FolderFile) {
                var _a = answers.type.split("_"), folder = _a[0], type = _a[1];
                var name_1 = answerType === AnswerType.Library ? "" : "_" + answers.name;
                var typeName = answerType === AnswerType.Library ? type + "_" + folder : folder;
                fileName = "source/" + folder + "/" + process.env.FILE_PREFIX + name_1 + "_" + typeName + ".ts";
                if (!fs_1.existsSync("source/" + folder)) {
                    fs_1.mkdirSync("source/" + folder);
                }
            }
            fileName = fileName.replace(/___/g, "_");
            fileName = fileName.replace(/__/g, "_");
            var content = fs_1.readFileSync(templateFile, "utf8");
            fs_1.writeFileSync(fileName, ejs_1.render(content, {
                // Generics
                date: today.format("MM/DD/YYYY"),
                // User
                user_name: process.env.USER_NAME,
                user_email: process.env.EMAIL,
                company_name: process.env.COMPANY_NAME,
                // Names
                namePascal: answerType !== AnswerType.Library ? change_case_1.pascalCase(answers.name) : "",
                // Details
                types: (answerType !== AnswerType.Library && answers.types && answers.types.length > 0) ? answers.types.join(",") : "None",
                description: answerType !== AnswerType.Library ? answers.description : "",
                record_type: answerType !== AnswerType.Library ? answers.record_type : "",
            }));
        });
    };
    exports.injectFiles = injectFiles;
});
