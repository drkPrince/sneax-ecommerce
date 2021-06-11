import Products from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
	const allProducts = await Products.find({})
		.limit(50)
		.select("_id name type category imageUrl price");
	res.send(allProducts);
};

export const getProductById = async (req, res) => {
	const theProduct = await Products.findById(req.params.id);
	res.send(theProduct);
};
