import User from "../models/userModel.js";
import { generateToken } from "../utils/jwt.js";

export const getProfile = async (req, res) => {
	const theUser = await User.findById(req.user._id).select("-password");
	res.send(theUser);
};

export const getUsersCart = async (req, res) => {
	const theUsersCart = await User.findById(req.user._id).select("cart");
	res.send(theUsersCart);
};

export const updateCart = async (req, res) => {
	const response = await User.findByIdAndUpdate(req.user._id, {
		cart: req.body.cart,
	});
	res.send(response);
};

export const login = async (req, res) => {
	const { email, password } = req.body;
	const theUser = await User.findOne({ email: email });
	if (theUser && (await theUser.comparePasswords(password))) {
		res.json({
			id: theUser._id,
			name: theUser.name,
			password: theUser.password,
			isAdmin: theUser.isAdmin,
			token: generateToken(theUser._id),
		});
	} else {
		res.status(401).send("Not Authorised. Invalid email or password");
	}
};

export const signup = async (req, res) => {
	const { name, email, password } = req.body;
	const doesExists = await User.findOne({ email });
	if (doesExists) res.status(403).send("User already exists");
	else {
		const newbie = await User.create({ name, email, password });
		if (newbie)
			res.status(201).json({
				id: newbie._id,
				name: newbie.name,
				email: newbie.email,
				token: generateToken(newbie._id),
			});
		else res.status(400).send("INVALID");
	}
};
