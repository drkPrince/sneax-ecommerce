import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import path from "path";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

import { errorHandler } from "./middleware/errorMiddleware.js";

import Stripe from "stripe";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_KEY);

connectDB();
const app = express();

const __dirname = path.resolve();

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

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/client/build")));
	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	);
}

app.use(errorHandler);

app.listen(
	process.env.PORT,
	console.log(`Listening on ${process.env.PORT} in ${process.env.NODE_ENV}`)
);
