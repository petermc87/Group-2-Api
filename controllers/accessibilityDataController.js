const Accessibility = require('../models/accessibility')

const accessibilityDataController = {
  accessibilityIndex (req, res, next) {
    Accessibility.find({ username: req.session.username }, (err, foundAccessibilitys) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.accessibilitys = foundAccessibilitys
        next()
      }
    })
  },
  accessibilityDestroy (req, res, next) {
    Accessibility.findByIdAndDelete(req.params.id, (err, deletedAccessibility) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.accessibility = deletedAccessibility
        next()
      }
    })
  },
  accessibilityUpdate (req, res, next) {
    Accessibility.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedAccessibility) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.accessibility = updatedAccessibility
        next()
      }
    })
  },
  accessibilityCreate (req, res, next) {
    req.body.username = req.session.username
    Accessibility.create(req.body, (err, createdAccessibility) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.accessibility = createdAccessibility
        next()
      }
    })
  },
  accessibilityShow (req, res, next) {
    Accessibility.findById(req.params.id, (err, foundAccessibility) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.accessibility = foundAccessibility
        next()
      }
    })
  }
}

module.exports = accessibilityDataController
