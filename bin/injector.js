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
    var injectFiles = function (program) {
        program.then(function (answers) {
            var today = moment(new Date());
            var _a = answers.type.split("_"), folder = _a[0], type = _a[1];
            var name = answers.name ? "_" + answers.name : "";
            var typeName = folder ? type + "_" + folder : type;
            var folderName = folder ? "/" + folder + "/" : "/";
            var templateFile = __dirname + "/templates/" + answers.type + ".txt";
            var fileName = "source" + folderName + process.env.FILE_PREFIX + name + "_" + typeName + ".ts";
            if (!fs_1.existsSync("source/" + folder)) {
                fs_1.mkdirSync("source/" + folder);
            }
            var content = fs_1.readFileSync(templateFile, "utf8");
            fs_1.writeFileSync(fileName, ejs_1.render(content, {
                // Generics
                date: today.format("MM/DD/YYYY"),
                // User
                user_name: process.env.USER_NAME,
                user_email: process.env.EMAIL,
                company_name: process.env.COMPANY_NAME,
                // Names
                namePascal: answers.name ? change_case_1.pascalCase(answers.name) : "",
                // Details
                types: (answers.types && answers.types.length > 0) ? answers.types.join(",") : "None",
                description: answers.description ? answers.description : "",
                record_type: answers.record_type ? answers.record_type : "",
            }));
        });
    };
    exports.injectFiles = injectFiles;
});
