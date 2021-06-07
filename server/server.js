import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import Stripe from "stripe";
dotenv.config();

const stripe = new Stripe(
	"sk_test_51IxqlgSFv3T0wJaK19OU5hneuSXI5hZw83YJvE2SZVf1nyPWpohNRU52H7alUW0AN2Ek14lmvtWGmSQYCyrLh9wC009d9D1Xo2"
);

connectDB();
const app = express();

app.use(express.json()); //allows parsing of json in body

//Routes
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);

app.post("/api/payment", (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: "inr",
	};

	stripe.charges.create(body, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).send({
				error: stripeErr,
			});
		} else {
			res.status(200).send({
				success: stripeRes,
			});
		}
	});
});

app.listen(
	process.env.PORT,
	console.log(`Listening on ${process.env.PORT} in ${process.env.NODE_ENV}`)
);
