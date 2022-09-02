const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  username: {
    type: String
  },
  googleId: {
    type: String
  },
  thumbnail: {
    type: String
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date
  },
  likes: {
    type: [String]
  }
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment