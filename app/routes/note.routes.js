const router = require('express').Router();

const noteController = require('../controllers/note.controllers');

router.post('/notes', noteController.createNote);
router.get('/notes', noteController.findAll);
router.get('/notes/:noteId', noteController.findOne);
router.put('/notes/:noteId', noteController.updateNote);
router.delete('/notes/:noteId', noteController.deleteNote);

module.exports = router;
