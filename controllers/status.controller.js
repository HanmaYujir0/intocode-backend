const Status = require('../models/Status.model')

module.exports.statusController = {
    postStatus: async (req, res) => {
        try {
            const postStatus = await Status.create({
                text: req.body.text
            });
            res.json(postStatus)
        } catch (error) {
            res.json(error)
        }
    },
    patchStatus: async (req, res) => {
        try {
            const patchStatus = await Status.findByIdAndUpdate(req.params.id, {

                text: req.params.text
            });
            res.json(patchStatus)
        } catch (error) {
            res.json(error)
        }
    },
    deleteStatus: async (req, res) => {
        try {
            const deleteStatus = await Status.findByIdAndRemove(req.params.id)
            res.json(deleteStatus)
        } catch (error) {
            res.json(error)
        }
    },
    getStatus: async (req, res) => {
        try {
            const getStatus = await Status.find()
            res.json(getStatus)
        } catch (error) {
            res.json(error)
        }
    }
}