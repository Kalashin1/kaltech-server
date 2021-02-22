const { post } = require('../data/models/post')
const { errorHandler } = require('./helper/error-handler')

// create a post
module.exports.createPost = async (req, res) => {
  const { author, title, body, scope, language} = req.body
  console.log(author, title, body, scope, language)
  try {
    const Post = await post.create({author, title, body, scope, language})
    res.json(Post)
  } catch (err) {
    const error = errorHandler(err)
    console.log(err)
    res.json(err.message)
  }
}

// fetch all post
module.exports.fetchAllPosts = async (req, res) => {
  try {
    const posts = await post.getAllPosts()
    res.json(posts)
  } catch (err) {
    const error = errorHandler(err)
    res.json(error)
  }
}

// fetch a particular post
module.exports.fetchPost = async (req, res) => {
  const { id } = req.params
  console.log(req.params.id)
  try {
    const Post = await post.getPostWithId(id)
    res.json(Post)
  }
  catch (err) {
    console.log(err)
    res.josn(err.message)
  }
}

// fetch the author of a post
module.exports.fetchAuthorOfPost = async (req, res) => {
  const { id } = req.params
  try{
    const author = await post.getAuthorOfPost(id)
    res.json({name: author.name, email: author.email, id: author._id})
  }
  catch (err) {
    const error = errorHandler(err)
    res.json(err.message)
  }
}

// remove a post
module.exports.removePost = async (req, res) => {
  const { id } = req.params
  try {
    const Post = await post.removePost(id)
    res.json({Post, message: 'post removed successfully'})
  }
  catch (err) {
    const error = errorHandler(err)
    res.json(err.message)
  }
}

// edit a post
module.exports.updatePost = async (req, res) => {
  const { id }  = req.params
  const Post = req.body
  try{
    const updatedPost = await post.editPost(id, Post)
    res.json(updatedPost)
  }
  catch (err) {
    res.json(err.message)
  }
}