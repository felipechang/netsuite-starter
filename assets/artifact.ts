import * as archiver from "archiver";
import * as dotenv from "dotenv";
import {createWriteStream} from "fs";

dotenv.config();
const date = new Date();

const output = createWriteStream(`deploy/artifact-${date.getTime()}.zip`);
const archive = archiver("zip");

archive.pipe(output);
archive.glob("source/**/!(*.ts)");
archive.finalize().then(() => {
    console.log(`artifact.zip has been created for ${process.env.ARTIFACT_NAME}`);
});