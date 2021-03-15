const { lessonSchema } = require('../schemas/lesson')
const { model } = require('mongoose')

// static methods
// get all lesson
lessonSchema.statics.getAllLessons = async function () {
  const lesson = await this.find()
  return lesson
}


//get all lesson that belong to a particular author
lessonSchema.statics.getLessonByLanguage = async function(language) {
  const lesson = await this.find({ language })
  return lesson
}

// get all lesson that is of same language
lessonSchema.statics.findByTopicAndLanguage = async function(language, topic) {
	const lesson = await this.find().where({language, topic})
	return lesson
}


// delete a lesson
lessonSchema.statics.removePostById = async function (_id) {
  const lesson = await this.findByIdAndDelete(_id)
  return lesson
}

// also delete a lesson based on the language and topic
lessonSchema.statics.deletePostWithLanguageAndTopic = async function(language, topic) {
  const lesson = await this.findOneAndDelete({language, topic})
  return lesson
}

// edit a lesson
lessonSchema.statics.editLesson = async function(_id, body, topic) {
  let lesson = await this.updateOne({_id}, { body, topic })
  return lesson
}

// Query Helpers
lessonSchema.statics.getPostWithId = async function (_id) {
  return this.findById(_id)
}


const lesson = model('lesson', lessonSchema);

module.exports.lesson = lesson
