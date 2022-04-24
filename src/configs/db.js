const mongoose = require("mongoose");

module.exports = () => {
	return mongoose.connect(
		"mongodb+srv://praveen:prav1234@bookstore.ooj3g.mongodb.net/bookStore?retryWrites=true&w=majority"
	);
};
