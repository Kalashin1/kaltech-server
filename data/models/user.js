const userSchema = require('../schemas/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


// salt rounds for passowrd hashing
const saltRounds = 10


// sattic methods
userSchema.statics.loginUser = async function(email, password){
  const user = await this.findOne({email})
  if(user){
    const result = await bcrypt.compare(password, user.password)
    if(result){
      return user
    }
    else{
      throw Error('incorrect password')
    }
  }
  throw Error('incorrect email, no user exists for this email')
}

// create a new user

//presave
userSchema.pre('save', async function (next) {
  if(this.password.length < 20){
    this.password = await bcrypt.hash(this.password, saltRounds)
    next()
  }
  next()
})


const user = mongoose.model('user', userSchema)

module.exports = user