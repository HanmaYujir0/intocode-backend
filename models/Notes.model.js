const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    name: String,
    notesStudent: {
        ref: 'Student',
        type: mongoose.SchemaTypes.ObjectId
    },
})

const Notes = mongoose.model('Notes', notesSchema)
module.exports = Notes