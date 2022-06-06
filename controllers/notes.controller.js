const Notes = require('../models/Notes.model')

module.exports.notesController = {
    postNotes: async (req, res) => {
        try {
            const notes = await Notes.create({
                name: req.body.name,
                notesStudent: req.body.notesStudent,
            })
            res.json(notes)
        } catch (error) {
            res.json(error)
        }
    },
    getNotes: async (req, res) => {
        try {
            const postNotes = await Notes.find().populate('notesStudent')
            res.json(postNotes)
        } catch (error) {
            res.json(error)
        }
    },
    patchNotes: async (req, res) => {
        try {
            const patchNotes = await Notes.create(req.params.id, {
                name: req.body.name,
                notesStudent: req.body.notesStudent,
            })
            res.json(patchNotes)
        } catch (error) {
            res.json(error)
        }
    },
    getNotesById: async (req, res) => {
        try {
            const getNotesById = await Notes.findById(req.params.id)
            res.json(getNotesById)
        } catch (error) {
            res.json(error)
        }
    },
    deleteNotes: async (req, res) => {
        try {
            const deleteNotes = await Notes.findByIdAndRemove(req.params.id)
            res.json(deleteNotes)
        } catch (error) {

        } res.json(error)
    }
}