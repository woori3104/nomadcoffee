import * as AWS from "aws-sdk";
const fs = require('fs');

AWS.config.update({
    credentials: {
        accessKeyId: process.env.AWS_KEY, 
        secretAccessKey: process.env.AWS_SECRET,
    },
});

export const uploadToS3 = async (file, userid, folderName) => {
    console.log("uploadToS3 start");
    console.log(file);
    const { filename, createReadStream } = await file;
    const objectName = `${folderName}/${userid}-${Date.now()}-${filename}`;
    console.log(`objectName:${objectName}`);
   // const readStream = createReadStream();
   // console.log(readStream);
    const readStream = fs.createReadStream(file);
    console.log(readStream);
    const { Location } = await new AWS.S3().upload({
        Bucket:"wr-nomadcoffee-uplods",
            //"woori-nomad-coffee-uploaders",
        Key: objectName,
        ACL: "public-read",
        Body: readStream,
    })
    .promise();
    console.log(Location);
    
    console.log("uploadToS3 end");
    return objectName;
};

function req_error(res: any, err: any) {
    throw new Error("Function not implemented.");
}
