const mongoose = require("mongoose");

//Make a Schema
const educationSchema = new mongoose.Schema({
    school: {type: String, require: true },
    degree: {type: String, required: true },
    currentStudent: {type: Boolean, required: true },
    startDateMonth: {type: String, required: true },
    startDateYear: {type: String, required: true },
    endDateMonth: String,
    endDateYear: String
})

// Make a Model From The Schema
const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema)

// Export the Model
module.exports = WorkExperience