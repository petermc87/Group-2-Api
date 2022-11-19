require ('dotenv').config()
// Require modules
const express = require('express')
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
app.use(express.json())
db.once('open', () => {
    console.log('connected to MongoDB Atlas')
})

app.use(
    session({
        secret: process.env.SECRET,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
        saveUninitialized: true,
        resave: false,
    })
)

//* Start Middleware
app.use(express.static('public'))
app.use('/api', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))
//* End Middleware


// Tell the app to listen on port
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})
