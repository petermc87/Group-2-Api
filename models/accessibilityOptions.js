const mongoose = require('mongoose')

// Make a Schema
const accessibilitySchema = new mongoose.Schema({
    vision: Boolean,
    motion: Boolean,
    webBrowser: Boolean,
    voiceOver: Boolean
})

// Make a Model From The Schema
const AccessibilityOptions = mongoose.model('AccessibilityOptions', accessibilitySchema)

// Export the Model
module.exports = AccessibilityOptions