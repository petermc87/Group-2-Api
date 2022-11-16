const mongoose = require("mongoose");

//Make a Schema
const profileSchema = new mongoose.Schema({
    profilePicture: {type: String, required: true },
    firstName: {type: String, required: true },
    lastName: {type: String, required: true },
    preferredPronouns: {type: String, required: true },
    showPronouns: {type: Boolean, required: true },
    location: {type: String, required: true },
    gender: {type: String, required: true },
    customGender: String ,
    raceEthnicity: {type: Array, required: true },
    customEthnicityRace: String 
})

// Make a Model From The Schema
const Profile = mongoose.model('Profile', profileSchema)

// Export the Model
module.exports = Profile