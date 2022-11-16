require ('dotenv').config()
// Require modules
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const db = require('./models/db')
const app = express()

// Start Config //
// This code makes us have req.body <=====
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(cors())
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
    console.log('connected to MongoDB Atlas')
})

// Tell the app to listen on port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})
