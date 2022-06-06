const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name: String,
    groupStudent: {
        ref: 'Group',
        type: mongoose.SchemaTypes.ObjectId
    },
    payment: Number,
    statusStudent: {
        ref: 'Status',
        type: mongoose.SchemaTypes.ObjectId
    },
    offer: {
        type: Boolean
    }
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student