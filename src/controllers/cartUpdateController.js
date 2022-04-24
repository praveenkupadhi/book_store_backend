const express = require("express");
const Cart = require("../models/cartModel");
const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const cartData = await Cart.findOne({
			user_id: req.body.user_id,
		})
			.lean()
			.exec();
		if (cartData === null) {
			const cartNew = await Cart.create({
				user_id: req.body.user_id,
				book_ids: [req.body.book_id],
			});
			return res.status(200).send(cartNew);
		} else {
			for (let i = 0; i < cartData.book_ids.length; i++) {
				if (cartData.book_ids[i] === req.body.book_id) {
					return res.status(400).send(cartData);
				}
			}
			const cart = await Cart.findOneAndUpdate(
				{ user_id: cartData.user_id },
				{
					book_ids: [...cartData.book_ids, req.body.book_id],
				}
			)
				.lean()
				.exec();
			return res.status(200).send(cart);
		}
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

module.exports = router;
