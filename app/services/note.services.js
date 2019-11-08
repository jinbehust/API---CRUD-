/* eslint-disable no-console */

const Note = require('../models/note.models');

async function createNote(title, content) {
  console.log({ title, content });
  const note = await Note.create({ title, content });
  return note;
}

async function findAll() {
  const notes = await Note.find();
  return notes;
}

async function findOne(noteId) {
  const note = await Note.findById(noteId);
  return note;
}

async function updateNote(noteId) {
  const note = await Note.findByIdAndUpdate(noteId);
  return note;
}

async function deleteNote(noteId) {
  const note = await Note.findByIdAndRemove(noteId);
  return note;
}

module.exports = {
  createNote,
  findAll,
  findOne,
  updateNote,
  deleteNote,
};
