const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	name: { type: String },
	author: { type: String },
	pages: { type: Number },
	year: { type: Number },
	price: { type: Number },
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
