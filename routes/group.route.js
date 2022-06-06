const { Router } = require("express");
const { groupController } = require("../controllers/groups.controller");

const router = Router();

router.post('/group', groupController.postGroup)
router.get('/group', groupController.getGroup)
router.get('/group/:id', groupController.getGroupById)
router.delete('/group/:id', groupController.deleteGroup)
router.patch('/group/:id', groupController.patchGroup)
router.get('/group/week/:id', groupController.getGroupByWeek)
router.get('/group/finish/:id', groupController.getFinishGroup)
router.patch('/group/offer/:id', groupController.patchOfferByGroup)

module.exports = router;