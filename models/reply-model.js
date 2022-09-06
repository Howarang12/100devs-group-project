const mongoose = require('mongoose')
const Schema = mongoose.Schema

const replySchema = new Schema({
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
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }
})

const Reply = mongoose.model('reply', replySchema)

module.exports = Reply