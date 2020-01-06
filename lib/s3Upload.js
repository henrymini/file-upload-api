// File is for command-line testing
// uploading files to AWS S3

// Requre AWS software development kit
const AWS = require('aws-sdk')

// UUID package
const uuid = require('uuid')

// Define name of the bucket we're using
const bucket = 'seio06.bucket'

// Create S3 Service module instance
const s3 = new AWS.S3()
console.log(s3)
