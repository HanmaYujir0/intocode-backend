const Group = require('../models/Group.model');
const Student = require('../models/Student.model');

module.exports.groupController = {
  postGroup: async (req, res) => {
    try {
      await Group.create({
        group: req.body.group,
        week: req.body.week,
        finish: req.body.finish,
      })
      res.json('Группа добавлена')
    } catch (error) {
      res.json(error)
    }
  },
  deleteGroup: async (req, res) => {
    try {
      await Group.findByIdAndRemove(req.params.id)
      res.json('Группа удалена')
    } catch (error) {
      res.json(error)
    }
  },
  patchGroup: async (req, res) => {
    try {
      await Group.findByIdAndUpdate({
        group: req.body.group,
        week: req.body.week,
        finish: req.body.finish,
      })
      res.json('Группа изменена')
    } catch (error) {
      res.json(error)
    }
  },
  getGroup: async (req, res) => {
    try {
      const getGroup = await Group.find()
      res.json(getGroup)
    } catch (error) {
      res.json(error)
    }
  },
  getGroupById: async (req, res) => {
    try {
      const getGroupById = await Group.findById(req.params.id)
      res.json(getGroupById)
    } catch (error) {
      res.json(error)
    }
  },
  getGroupByWeek: async (req, res) => {
    try {
      const getGroupByWeek = await Group.find({week: req.params.id})
      res.json(getGroupByWeek)
    } catch (error) {
      res.json(error)
    }
  },
  getFinishGroup: async (req, res) => {
    try {
      const getFinishGroup = await Group.find({finish: req.params.id})
      res.json(getFinishGroup)
    } catch (error) {
      res.json(error)
    }
  },
  patchOfferByGroup: async (req, res) => {
    try {
      const student = await Student.find({groupStudent: req.params.id});
      const offer = await student.filter(student => student.offer)
      const procent = Math.floor((offer / student) * 100)
      res.json(procent)
    } catch (error) {
      res.json(error)
    }
  }
}
