const noteService = require('../services/note.services');

async function createNote(req, res) {
  const { title, content } = req.body;
  const note = await noteService.createNote(title, content);
  return res.send(note);
}

async function findAll(req, res) {
  const notes = await noteService.findAll();
  return res.send(notes);
}

async function findOne(req, res) {
  const { noteId } = req.params;
  const note = await noteService.findOne(noteId);
  return res.send(note);
}

async function updateNote(req, res) {
  const { noteId } = req.params;
  const note = await noteService.updateNote(noteId);
  return res.send(note);
}

async function deleteNote(req, res) {
  const { noteId } = req.params;
  await noteService.deleteNote(noteId);
  return res.send('Note delete successfully!');
}

module.exports = {
  createNote,
  findAll,
  findOne,
  updateNote,
  deleteNote,
};
