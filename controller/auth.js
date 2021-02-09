const User = require('../data/models/user')
const  {errorHandler} = require('./helper/error-handler')


// create a new user
module.exports.signupUser = async function (req, res) {
  // console.log(req.body)
  const {email, password, name} = req.body
  try {
    const newUser = await User.create({email, password, name})
    req.session.user = { id: newUser._id, email: newUser.email}
    res.json({ id: newUser._id, email: newUser.email})
  } catch (err) {
    const errors = errorHandler(err)
    res.json(errors)
  }
}

// login an existing user
module.exports.loginUser = async function(req, res) {
  const {email, password} = req.body
  try{
    const user = await User.loginUser(email, password)
    req.session.user = {id: user._id, email: user.email}
    res.json({id: user._id, email: user.email})
  }
  catch(err){
    const errors = errorHandler(err)
    console.log(err)
    res.json(errors).status(400)
  }
}

// logout a user
module.exports.logoutUser = async function(req, res){
  if(req.session.user){
    delete req.session.user
    res.json({message: 'user logged out'})
  }
  else{
    res.json({message : 'you are not logged in'})
  }
}