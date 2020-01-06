const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  fileType: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Upload', uploadSchema)
