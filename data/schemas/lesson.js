const { Schema } = require('mongoose')

const lessonSchema = new Schema({
  topic: {
    type: String,
    required: [true, 'please provide a topic for your lesson'],
    minlength: [3, 'title cannot be less than 3 characters']
  },
  body: {
    type: String,
    required: [true, 'please enter the contents of your post']
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  language: {
    type: String,
    required: [true, 'please pick a language that your post is about']
  },
  scope: {
    type: String,
    default: 'frontend'
  },
  updatedAt: {
    type: Date
  }
})

module.exports.lessonSchema = lessonSchema