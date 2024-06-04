const mongoose = require('mongoose')  // mongoose allows schema creation

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, { timestamps: true })

// create the post model with the post schema
module.exports = mongoose.model('Post', postSchema)