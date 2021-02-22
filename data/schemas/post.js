const { ObjectID, ObjectId } = require('mongodb')
const { Schema } = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'please provide a title for your post'],
    minlength: [10, 'title cannot be less than 10 characters']
  },
  body: {
    text: {
      type: String,
      required: [true, 'please enter the contents of your post']
    },
    code: {
      type: String
    }
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  author: {
    name: {
      type: String,
      required: [true, 'please enter the name of the author']
    },
    email: {
      type: String,
      required: [true, 'please provide the email of the author']
    }
  },
  tags: [],
  language: {
    type: String,
    required: [true, 'please pick a language that your post is about']
  },
  scope: {
    type: String,
    required: [true, 'please provide a scope for your topic']
  },
  updatedAt: {
    type: Date
  }
})

module.exports.postSchema = postSchema