const { Router } = require('express')
const { signupUser, loginUser, logoutUser } = require('../controller/auth')
const { getUser } = require('../controller/helper/middleware')
const { createPost, fetchAllPosts, fetchPost, fetchAuthorOfPost, removePost, updatePost } = require('../controller/post')
const { isUserAuthenticated } = require('../controller/helper/middleware')


const router = Router()

// user routes
router.post('/signup', signupUser)
router.get('/user', getUser)
router.get('/logout', logoutUser)
router.post('/login', loginUser)

// post routes

// create a post
router.post('/post', isUserAuthenticated, createPost)
// fetch all post
router.get('/posts',  isUserAuthenticated, fetchAllPosts)
// fetch  a particular post 
router.get('/post/:id',  isUserAuthenticated, fetchPost)
// get the author of a post
router.get('/post/author/:id', fetchAuthorOfPost)
// remove a particular post
router.delete('/post/:id', removePost)
// update a post
router.put('/post/:id', updatePost)

module.exports = router