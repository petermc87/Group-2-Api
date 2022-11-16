require ('dotenv').config()
// Require modules
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const db = require('./models/db')
const app = express()

