exports.__esModule = true;
exports.makeArtifact = void 0;
var archiver = require("archiver");
var dotenv = require("dotenv");
var fs_1 = require("fs");
var moment = require("moment");
exports.makeArtifact = function () {
    dotenv.config();
    var date = new Date();
    var time = moment(date);
    var output = fs_1.createWriteStream("deploy/" + process.env.ARTIFACT_NAME + "-" + time.format("YYYY-MM-DD") + ".zip");
    var archive = archiver("zip");
    archive.pipe(output);
    archive.glob("source/**/!(*.ts)");
    archive.finalize().then(function () {
        console.log("zip has been created for " + process.env.ARTIFACT_NAME);
    });
};
