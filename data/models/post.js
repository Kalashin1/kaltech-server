const { postSchema } = require('../schemas/post')
const { model } = require('mongoose')
const mongoose = require('mongoose')

// static methods
// get all posts
postSchema.statics.getAllPosts = async function () {
  const posts = await this.find()
  return posts
}

//get all post that belong to a particular author
postSchema.statics.getPostByAuthor = async function(author) {
  const posts = await this.find().where({author})
  return posts
}

// fetch author of post
postSchema.statics.getAuthorOfPost = async function (_id) {
	const user = await mongoose.model('user').findById({_id})
	return user
}

// delete a post
postSchema.statics.removePost = async function (_id) {
  const post = await this.findByIdAndDelete(_id)
  return post
}

// edit a post
postSchema.statics.editPost = async function(_id, newPost) {
  let post = await this.updateOne({_id}, { body: newPost.body, title : newPost.title})
  return post
}

// Query Helpers
postSchema.statics.getPostWithId = function (_id) {
  return this.findById(_id)
}
const post = model('post', postSchema);

module.exports.post = post
