import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product";
import { listProducts } from "../store/actions/productActions";

const Products = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);

	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	if (error) return <p>Error</p>;

	return (
		<div>
			{products.map((p) => (
				<Product product={p} key={p._id} />
			))}
		</div>
	);
};

export default Products;
