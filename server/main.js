

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

S3.config = {
    key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET
//    region: 'process.env.S3_REGION' // Only needed if not "us-east-1" or "us-standard"
};