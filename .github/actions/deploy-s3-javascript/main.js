const core = require('@actions/core');
const exec = require('@actions/exec');
const github = require('@actions/github');

async function run() {
//   try {
    // const bucketName = core.getInput('bucket-name', { required: true });
    // const region = core.getInput('region', { required: true });
    // const sourceDir = core.getInput('source-dir', { required: true });

    // Sync the local directory to the S3 bucket
    // await exec.exec(`aws s3 sync ${sourceDir} s3://${bucketName} --region ${region} --delete`);

    // core.info(`Successfully deployed to S3 bucket: ${bucketName}`);
//   } catch (error) {
    // core.setFailed(`Deployment failed: ${error.message}`);
//   }
}

run();