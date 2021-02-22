const { postSchema } = require('../schemas/post')
const { model } = require('mongoose')

// static methods
// get all posts
postSchema.statics.getAllPosts = async function () {
  const posts = await this.find()
  return posts
}

// get post by tag
postSchema.statics.getPostsByTag = async function(tag) {
  const posts = await this.find()
  posts.forEach(post => {
    if (post.tags.includes(tag)) {
      return post
    }
  })
}

//get all post that belong to a particular author
postSchema.statics.getPostByAuthor = async function(author) {
  const posts = await this.find().where({author})
  return posts
}

// get all post that is of same language
postSchema.statics.findByLanguage = async function(language) {
	const posts = await this.find().where({language})
	return posts
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
postSchema.statics.getPostWithId = async function (_id) {
  return this.findById(_id)
}


const post = model('post', postSchema);

module.exports.post = post
