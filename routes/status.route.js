const { Router } = require("express");
const { statusController } = require("../controllers/status.controller");

const router = Router();

router.post('/status', statusController.postStatus)
router.patch('/status/:id', statusController.patchStatus)
router.delete('/status/:id', statusController.deleteStatus)
router.get('/status', statusController.getStatus)

module.exports = router;