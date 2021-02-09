const { ObjectID, ObjectId } = require('mongodb')
const { Schema } = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'please provide a title for your post'],
    minlength: [10, 'title cannot be less than 10 characters']
  },
  body: {
    type: String,
    required: [true, 'please enter the contents of your post']
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
    id: {
      type: ObjectId,
      required: [true, 'please provide the id of the author']
    },
    email: {
      type: String,
      required: [true, 'please provide the email of the author']
    }
  }
})

module.exports.postSchema = postSchema