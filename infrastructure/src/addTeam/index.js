const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const bucket = process.env.TEAMS_BUCKET_NAME;

exports.handler = async (event) => {
  const bucketName = bucket;
  const key = 'teams.json';

  try {
    // Check if the file exists in S3
    let existingData = {};
    try {
      const existingFile = await s3.getObject({ Bucket: bucketName, Key: key }).promise();
      existingData = JSON.parse(existingFile.Body.toString());
    } catch (error) {
      // If the file doesn't exist, create initial data
      existingData = { teams: [] };
    }

    // Parse the incoming POST data from the API Gateway event
    const postData = JSON.parse(event.body);

    // Append data to the teams array
    const newData = {
      team: postData.team,
      members: postData.members,
    };

    existingData.teams.push(newData);

    // Convert the updated data back to JSON
    const updatedJson = JSON.stringify(existingData);

    // Upload the updated JSON back to S3
    await s3.putObject({
      Bucket: bucketName,
      Key: key,
      Body: updatedJson,
      ContentType: 'application/json',
    }).promise();

    return {
      statusCode: 200,
      body: 'Data appended and updated successfully!',
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
