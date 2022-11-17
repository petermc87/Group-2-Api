const workExperienceDataController = require('../models/workExperience')

const workExperienceDataController = {
  workExperienceIndex (req, res, next) {
    WorkExperience.find({ username: req.session.username }, (err, foundWorkExperiences) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.workExperiences = foundWorkExperiences
        next()
      }
    })
  },
  workExperienceDestroy (req, res, next) {
    WorkExperience.findByIdAndDelete(req.params.id, (err, deletedWorkExperience) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.workExperience = deletedWorkExperience
        next()
      }
    })
  },
  workExperienceUpdate (req, res, next) {
    WorkExperience.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedWorkExperience) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.workExperience = updatedWorkExperience
        next()
      }
    })
  },
  workExperienceCreate (req, res, next) {
    req.body.username = req.session.username
    WorkExperience.create(req.body, (err, createdWorkExperience) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.workExperience = createdWorkExperience
        next()
      }
    })
  },
  workExperienceShow (req, res, next) {
    WorkExperience.findById(req.params.id, (err, foundWorkExperience) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.workExperience = foundWorkExperience
        next()
      }
    })
  }
}

module.exports = workExperienceDataController
