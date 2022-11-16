const mongoose = require("mongoose");

//Make a Schema
const workExperienceSchema = new mongoose.Schema({
    title: {type: String, require: true },
    employmentType: {type: String, required: true },
    companyName: {type: String, required: true },
    location: {type: String, required: true },
    showPronouns: {type: Boolean, required: true },
    currentlyWorking: {type: Boolean, required: true },
    startDateMonth: {type: String, required: true },
    startDateYear: {type: String, required: true },
    endDateMonth: String,
    endDateYear: String,
})

// Make a Model From The Schema
const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema)

// Export the Model
module.exports = WorkExperience