const User = require('../models/user')

const userDataController = {
  userIndex (req, res, next) {
    User.find({ username: req.session.username }, (err, foundUsers) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.users = foundUsers
        next()
      }
    })
  },
  userDestroy (req, res, next) {
    User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.user = deletedUser
        next()
      }
    })
  },
  userUpdate (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.user = updatedUser
        next()
      }
    })
  },
  userCreate (req, res, next) {
    req.body.username = req.session.username
    User.create(req.body, (err, createdUser) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.user = createdUser
        next()
      }
    })
  },
  userShow (req, res, next) {
    User.findById(req.params.id, (err, foundUser) => {
      if (err) {
        res.status(400).send({ msg: err.message })
      } else {
        res.locals.data.user = foundUser
        next()
      }
    })
  }
}