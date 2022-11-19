/// Import Dependencies

const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

// Create Route
const router = express.Router()


router.post('/signup', async (req, res) => {
  // console.log('we'e h)
//// encrypt password
    req.body.password = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    )
    console.log(req.body.password)
///// create the New user
    User.create(req.body)
      .then((user) => {
//// redirect to login page
        // res.redirect('/user/login')
        res.json(user)
      })
      .catch((error) => {
//// send error as json
        console.log(error)
        res.json({ error })
      })
  })



router.post('/login', async (req, res) => {
//// get the data from the request body
    const { username, password,  } = req.body
//// search for the user
    User.findOne({ username })
      .then(async (user) => {
//// check if user exists
        if (user) {
//// compare password
          const result = await bcrypt.compare(password, user.password)
          if (result) {
//// store some properties in the session object
            req.session.username = username
            req.session.loggedIn = true
//// redirect to Group-2-Api page if successful
            // res.redirect('/Group-2-Api')
            res.json(user)
          } else {
//// error if password doesn't match
            res.json({ error: "password doesn't match" })
          }
        } else {
//// send error if user doesn't exist
          res.json({ error: "user doesn't exist" })
        }
      })
      .catch((error) => {
//// send error as json
        console.log(error)
        res.json({ error })
      })
  })

router.get('/logout', (req, res) => {
//// destroy session and redirect to main page
  req.session.destroy((err) => {
    if (err) {
      console.error(err)
      res.status(500).json(err)
    } else {
      res.redirect('/')
    }    
  })
})

/// ///////////////////////////////////////
// Export the Router
/// ///////////////////////////////////////
module.exports = router


