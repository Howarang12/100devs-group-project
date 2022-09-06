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
    trim: true,
    required: true
  },
  date: {
    type: Date
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }],
  replies:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reply'
  }]
})

const Comment = mongoose.model('comment', commentSchema)

module.exports = Comment