const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema(
	{
		address: { type: String, required: true },
		contact: { type: Number, required: true },
		totalPrice: { type: String, required: true },
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	{
		versionKey: false,
	}
);

const Checkout = mongoose.model("checkout", checkoutSchema);

module.exports = Checkout;
