const User = require('../../data/models/user')

module.exports.getUser = async function (req, res) {
  let id 
  req.session.user ?  id = req.session.user.id: id= null
  if (id){
    const user = await User.findById({_id: id})
    res.json({id : user._id, email: user.email})
  }
  else{
    res.json('no cookie')
  }
}