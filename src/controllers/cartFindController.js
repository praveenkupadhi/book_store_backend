const express = require("express");
const Cart = require("../models/cartModel");
const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const cart = await Cart.findOne({
			user_id: req.body.user_id,
		})
			.lean()
			.exec();
		return res.status(200).send(cart);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

module.exports = router;
