const mongoose =require('mongoose')

const groupSchema = mongoose.Schema({
    group: String,
    week: Number,
    finish:{
        type: Boolean,
    }
})

const Group = mongoose.model("Group", groupSchema)
module.exports = Group