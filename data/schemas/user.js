const { Schema } = require('mongoose')
const { isPassword, isEmail } = require('../validators/validator')

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'please provide an email'],
    validate: [isEmail, 'please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'please provide a password for your account'],
    validate: [isPassword, 'password must contain a number, an uppercase and lower case letter'],
    minlength: [8, 'passowrd must be at least 8 characters long'],
  },
  name: {
    type: String,
    required: [true, 'please provide a name for your account'],
    minlength: [3, 'name cannot be less than 3 letters']
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

module.exports = userSchema