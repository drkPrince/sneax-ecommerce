import Order from "../models/orderModel.js";
import Stripe from "stripe";

const stripe = new Stripe(
	"sk_test_51IxqlgSFv3T0wJaK19OU5hneuSXI5hZw83YJvE2SZVf1nyPWpohNRU52H7alUW0AN2Ek14lmvtWGmSQYCyrLh9wC009d9D1Xo2"
);

export const createOrder = async (req, res) => {
	const paymentIntent = await stripe.paymentIntents.create({
		amount: req.body.totalPrice,
		currency: "inr",
		payment_method_types: ["card"],
		receipt_email: "imprincinho@gmail.com",
	});
	console.log("paymentIntent", paymentIntent);
	res.send(paymentIntent);
	// try {
	// 	const newOrder = await Order.create(req.body);
	// 	res.send(newOrder);
	// } catch (e) {
	// 	res.send(e);
	// }
};

export const getUsersOrders = async (req, res) => {
	const usersOrders = await Order.find({ user: req.user.id });
	res.send(usersOrders);
};
