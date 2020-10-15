const mongoose = require("mongoose");
const booksController = require("../controllers/savedBooksController");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Array, required: true },
  description: {type: String, required: true},
  image: {type: String, required: true},
  link: {type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// res.items is an array of books

// title: res.items.volumeInfo.title
// author: res.items.volumeInfo.authors (YES! PLURAL!)
// desc: res.items.volumeInfo.description(this is an array, need a loop)
// image: res.items.volumeInfo.imageLinks.thumbnail
// link: res.items.volumeInfo.previewLink