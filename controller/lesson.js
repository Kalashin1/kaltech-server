const { lesson } = require('../data/models/lesson')
const { errorHandler } = require('./helper/error-handler')

// create a lesson
module.exports.createLesson = async (req, res) => {
  const { topic, body, language } = req.body
  console.log(topic, body, language)
  try {
    const Post = await lesson.create({ topic, body, language })
    res.json(Post)
  } catch (err) {
    const error = errorHandler(err)
    console.log(err)
    res.json(error)
  }
}

//fetch a lesson based on it's id 
module.exports.fetchLessonWithId = async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const Lesson = await lesson.getPostWithId(id)
    res.json(Lesson)
  } catch (err) {
    const error = errorHandler(err)
    console.log(err)
    res.json(err.message)
  }
}

// fetch all lesson
module.exports.fetchAllLessons = async (req, res) => {
  try {
    const lessons = await lesson.getAllLessons()
    res.json(lessons)
  } catch (err) {
    const error = errorHandler(err)
    res.json(error)
  }
}

// fetch a lessons based on language
module.exports.fetchLessonWithLanguage = async (req, res) => {
  const { language } = req.body
  console.log(req.body.language )
  try {
    const Lessons = await lesson.getLessonByLanguage(language)
    res.json(Lessons)
  }
  catch (err) {
    console.log(err)
    const error = errorHandler(err)
    res.josn(error)
  }
}

// fetch a lessons based on language and topic
module.exports.fetchLessonWithTopicAndLanguage = async (req, res) => {
  const { language, topic } = req.body
  console.log(language, topic)
  try {
    const Lesson = await lesson.findByTopicAndLanguage(language, topic)
    res.json(Lesson)
  }
  catch (err) {
    const error = errorHandler(err)
    res.json(error)
  }
}


// remove a lesson
module.exports.removePost = async (req, res) => {
  const { id } = req.params
  try {
    const Lesson = await lesson.removePostById(id)
    res.json({Lesson, message: 'lesson removed successfully'})
  }
  catch (err) {
    const error = errorHandler(err)
    res.json(err.message)
  }
}

module.exports.deleteLessonithLanguageAndTopic = async (req, res) => {
  const { language, topic } = req.body
  try{
    const Lesson = await lesson.deletePostWithLanguageAndTopic(language, topic)
    res.json({Lesson, message: 'lesson removed successfully'})
  }
  catch (err) {
    const error = errorHandler(err)
    res.json(error)
  }
}

// edit a lesson
module.exports.updatePost = async (req, res) => {
  const { id }  = req.params
  const {body, topic} = req.body.Lesson
  try{
    const updatedPost = await lesson.editLesson(id, body, topic)
    res.json(updatedPost)
  }
  catch (err) {
    const error = errorHandler(err)
    res.json(error)
  }
}