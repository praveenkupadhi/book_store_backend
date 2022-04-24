const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
	{
		book_ids: [
			{
				type: String,
				ref: "book",
				required: true,
			},
		],
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

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
