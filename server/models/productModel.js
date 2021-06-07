import mongoose from "mongoose";

const productSchema = mongoose.Schema(
	{
		// user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
		name: { type: String, required: true },
		type: String,
		category: { type: String, required: true },
		imageUrl: { type: String, required: true },
		images: String,
		description: String,
		price: { type: Number, required: true, default: 0 },
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
