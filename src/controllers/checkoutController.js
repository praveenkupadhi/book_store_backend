const express = require("express");
const Checkout = require("../models/checkoutModel");
const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const checkout = await Checkout.create(req.body);
		return res.status(200).send(checkout);
	} catch (error) {
		return res.status(500).send(error.message);
	}
});

module.exports = router;
