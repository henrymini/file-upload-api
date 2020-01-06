// File is for command-line testing
// uploading files to AWS S3

// Requre AWS software development kit
const AWS = require('aws-sdk')

// UUID package
// const uuid = require('uuid')

// Define name of the bucket we're using
const bucket = 'sei06.bucket'

// Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)

// Create object of params for putObject call:

module.exports = (key, body) => {
  const params = {
    Bucket: bucket,
    ACL: 'public-read'
  }
  return new Promise((resolve, reject) => {
    params.Key = key
    params.Body = body
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// const uploadPromise = s3.upload(params).promise()
// uploadPromise.then(data => {
//   console.log(data)
// })
//   .catch(console.error)
//
// s3.putObject(params).promise()
//   .then(console.log)
//   .catch(console.error)
