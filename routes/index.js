const { Router } = require("express");
const router = Router();

router.use(require("./group.route"));
router.use(require("./student.route"));
router.use(require("./notes.route"));
router.use(require("./status.route"));

module.exports = router;