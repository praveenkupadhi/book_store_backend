const jwt = require("jsonwebtoken");

const newToken = (user) => {
	return jwt.sign(
		{ user: user },
		"kasf83#%%$@90jklfd-0klgd-09u3425jndljka(*__U43590234-12kl32;4234#@!$!#@$!3"
	);
};

const register = (User) => async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email }).lean().exec();

		if (user) {
			return res.status(400).send("Email is already registered");
		}

		user = await User.create(req.body);

		const token = newToken(user);

		return res.status(201).send(token);
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

const login = (User) => async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email });

		if (!user) {
			return res.status(400).send("Either email or password is incorrect");
		}

		const match = user.checkPassword(req.body.password);
		if (!match) {
			return res.status(400).send("Either email or password is incorrect");
		}

		const token = newToken(user);
		return res.status(200).send(token);
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = { register, login };
