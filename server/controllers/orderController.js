import Order from "../models/orderModel.js";
import Stripe from "stripe";

const stripe = new Stripe(
	"sk_test_51IxqlgSFv3T0wJaK19OU5hneuSXI5hZw83YJvE2SZVf1nyPWpohNRU52H7alUW0AN2Ek14lmvtWGmSQYCyrLh9wC009d9D1Xo2"
);

export const createCheckoutSession = async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items: [
			{
				price_data: {
					currency: "usd",
					product_data: {
						name: "Nike Shoe(s)",
					},
					unit_amount: req.body.price * 100,
				},
				quantity: 1,
			},
		],
		mode: "payment",
		success_url: "https://localhost:3000/success",
		cancel_url: "https://localhost:3000/cancel",
	});

	res.json({ id: session.id });
};

export const createOrder = async (req, res) => {
	try {
		const newOrder = await Order.create(req.body);
		res.send(newOrder);
	} catch (e) {
		res.send(e);
	}
};

export const getUsersOrders = async (req, res) => {
	const usersOrders = await Order.find({ user: req.user.id });
	res.send(usersOrders);
};
