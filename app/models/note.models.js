const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  title: String,
  content: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Note', Schema);
