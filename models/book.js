const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: Number,
  isbn: String,
  summary: String,
  coverImage: String,
  category: String,
  pageCount: Number,
  language: String
});

module.exports = mongoose.model('Book', bookSchema);