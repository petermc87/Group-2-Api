const express = require("express")
const router = express.Router()
const apiController = require('./apiController')
const profileDataController = require('./profileDataController.js')
const userDataController = require('./userDataController.js')

const educationDataController = require('./educationDataController')

router.get('/profile', profileDataController.profileIndex, apiController.profileIndex)
router.delete('/profile/:id', profileDataController.profileDestroy, apiController.showProfile)
router.put('/profile/:id', profileDataController.profileUpdate, apiController.showProfile)
router.post('/profile', profileDataController.profileCreate, apiController.showProfile)
router.get('/profile/:id', profileDataController.profileShow, apiController.showProfile)
