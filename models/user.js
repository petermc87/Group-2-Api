/// ///////////////////////////////////////////
// Import Dependencies
/// ///////////////////////////////////////////
const mongoose = require('mongoose')

/// /////////////////////////////////////////////
// Define Model
/// /////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose

// make fruits schema
const userSchema = new Schema({
    emailAddress: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    agreeDisabilities: { type: Boolean, required: true },
    agreeTermsOfService: { type: Boolean, required: true }
})

// make fruit model
const User = model('User', userSchema)

/// ////////////////////////////////////////////////
// Export Model
/// ////////////////////////////////////////////////
module.exports = User