const { Router } = require('express')
const { signupUser, loginUser, logoutUser } = require('../controller/auth')
const { getUser } = require('../controller/helper/middleware')
const { createLesson, fetchAllLessons, fetchLessonWithId, fetchLessonWithLanguage, fetchLessonWithTopicAndLanguage, deleteLessonithLanguageAndTopic, updatePost, removePost } = require('../controller/lesson')
const { isUserAuthenticated } = require('../controller/helper/middleware')


const router = Router()

// user routes
router.post('/signup', signupUser)
router.get('/user', getUser)
router.get('/logout', logoutUser)
router.post('/login', loginUser)

// post routes

// create a post
router.post('/lesson', createLesson)
// fetch all post
router.get('/lessons', fetchAllLessons)
// fetch  a particular post 
router.get('/lesson/:id', fetchLessonWithId)
// get the author of a post
router.get('/lessons/language/', fetchLessonWithLanguage)
// get the author of a post
router.get('/lesson/language/topic', fetchLessonWithTopicAndLanguage)
// remove a particular lesson
router.delete('/lesson/:id', removePost)
// remove a particular lesson
router.delete('/lesson/language/topic', deleteLessonithLanguageAndTopic)
// update a lesson
router.put('/lesson/:id', updatePost)


module.exports = router