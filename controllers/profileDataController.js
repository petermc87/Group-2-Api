const Profile = require('../models/profile')

const profileDataController = {
  profileIndex (req, res, next) {
    Profile.find({ username: req.session.username }, (err, foundProfiles) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.profiles = foundProfiles
        next()
      }
    })
  },
  profileDestroy (req, res, next) {
    Profile.findByIdAndDelete(req.params.id, (err, deletedProfile) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.profile = deletedProfile
        next()
      }
    })
  },
  profileUpdate (req, res, next) {
    Profile.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProfile) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.profile = updatedProfile
        next()
      }
    })
  },
  profileCreate (req, res, next) {
    req.body.username = req.session.username
    Profile.create(req.body, (err, createdProfile) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.profile = createdProfile
        next()
      }
    })
  },
  profileShow (req, res, next) {
    Profile.findById(req.params.id, (err, foundProfile) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.profile = foundProfile
        next()
      }
    })
  }
}

module.exports = profileDataController
