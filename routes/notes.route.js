const { Router } = require("express");
const { notesController } = require("../controllers/notes.controller");

const router = Router();

router.post('/notes', notesController.postNotes)
router.get('/notes', notesController.getNotes)
router.patch('/notes/:id', notesController.patchNotes)
router.get('/notes/:id', notesController.getNotesById)
router.delete('/notes/:id', notesController.deleteNotes)

module.exports = router;