const express = require("express");
const Book = require("../models/bookModel");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const book = await Book.find().lean().exec();
		book.forEach((b) => {
			b.finalPrice = b.price - b.price * (b.discount / 100);
		});
		return res.status(200).send(book);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

router.post("/", async (req, res) => {
	try {
		let data = [];
		for (let i = 0; i < req.body._id.length; i++) {
			const book = await Book.findOne({ _id: req.body._id[i] }).lean().exec();
			data.push(book);
		}
		return res.status(200).send(data);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

module.exports = router;
