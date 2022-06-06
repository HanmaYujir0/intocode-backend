const Student = require('../models/Student.model')

module.exports.studentController = {
    postStudent: async (req, res) => {
        try {
            const student = await Student.create({
                name: req.body.name,
                group: req.body.group,
                payment: req.body.payment,
                status: req.body.status,
                offer: req.body.offer,
            });
            res.json(student)
        } catch (error) {
            res.json(error)
        }
    },
    patchStudent: async (req, res) => {
        try {
            const patchStudent = await Student.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                group: req.body.group,
                payment: req.body.payment,
                status: req.body.status,
                offer: req.body.offer,
            });
            res.json(patchStudent)
        } catch (error) {
            res.json(error)
        }
    },
    getStudent: async (req, res) => {
        try {
            const getStudent = await Student.find()
            res.json(getStudent)
        } catch (error) {
            res.json(error)
        }
    },
    getStudentById: async (req, res) => {
        try {
            const getStudentById = await Student.findById(req.params.id)
            res.json(getStudentById)
        } catch (error) {
            res.json(error)
        }
    },
    getStudentByGroup: async (req, res) => {
        try {
            const getStudentByGroup = await Student.find({ groupStudent: req.params.id })
            res.json(getStudentByGroup)
        } catch (error) {
            res.json(error)
        }
    },
    getStudentStatus: async (req, res) => {
        try {
            const getStudentStatus = await Student.find({ statusStudent: req.params.id })
            res.json(getStudentStatus)
        } catch (error) {
            res.json(error)
        }
    },
    getStudentsPayment: async (req, res) => {
        try {
            const getStudentsPayment = await Student.find({ payment: req.body.payment })
            res.json(getStudentsPayment)
        } catch (error) {
            res.json(error)
        }
    },

}