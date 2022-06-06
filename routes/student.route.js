const { Router } = require("express");
const { studentController } = require("../controllers/students.controller");

const router = Router();

router.post('/student',studentController.postStudent)
router.patch('/student/:id', studentController.patchStudent)
router.get('/student', studentController.getStudent)
router.get('/student/:id', studentController.getStudentById)
router.get('/student/group/:id', studentController.getStudentByGroup)
router.get('/student/status/:id', studentController.getStudentStatus)
router.get('/student/payment/:id', studentController.getStudentsPayment)

module.exports = router;