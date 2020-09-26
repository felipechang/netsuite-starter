(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "archiver", "dotenv", "fs", "moment"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var archiver = require("archiver");
    var dotenv = require("dotenv");
    var fs_1 = require("fs");
    var moment = require("moment");
    dotenv.config();
    var date = new Date();
    var time = moment(date);
    var output = fs_1.createWriteStream("deploy/" + process.env.ARTIFACT_NAME + "-" + time.format("YYYY-MM-DD") + ".zip");
    var archive = archiver("zip");
    archive.pipe(output);
    archive.glob("source/**/!(*.ts)");
    archive.finalize().then(function () {
        console.log("artifact.zip has been created for " + process.env.ARTIFACT_NAME);
    });
});
