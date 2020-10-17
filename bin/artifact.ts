import * as archiver from "archiver";
import * as dotenv from "dotenv";
import {createWriteStream} from "fs";
import * as moment from "moment";

export const makeArtifact = (): void => {

    dotenv.config();
    const date = new Date();
    const time = moment(date);

    const output = createWriteStream(`deploy/${process.env.ARTIFACT_NAME}-${time.format("YYYY-MM-DD")}.zip`);
    const archive = archiver("zip");

    archive.pipe(output);
    archive.glob("source/**/!(*.ts)");
    archive.finalize().then(() => {
        console.log(`zip has been created for ${process.env.ARTIFACT_NAME}`);
    });
};