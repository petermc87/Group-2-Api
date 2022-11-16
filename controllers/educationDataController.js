const Education = require('../models/education')

const educationDataController = {
  educationIndex (req, res, next) {
    Education.find({ username: req.session.username }, (err, foundEducations) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.educations = foundEducations
        next()
      }
    })
  },
  educationDestroy (req, res, next) {
    Education.findByIdAndDelete(req.params.id, (err, deletedEducation) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.education = deletedEducation
        next()
      }
    })
  },
  educationUpdate (req, res, next) {
    Education.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedEducation) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.education = updatedEducation
        next()
      }
    })
  },
  educationCreate (req, res, next) {
    req.body.username = req.session.username
    Education.create(req.body, (err, createdEducation) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.education = createdEducation
        next()
      }
    })
  },
  educationShow (req, res, next) {
    Education.findById(req.params.id, (err, foundEducation) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.education = foundEducation
        next()
      }
    })
  }
}