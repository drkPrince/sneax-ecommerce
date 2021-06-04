import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";
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
			<Grid templateColumns="repeat(4, 1fr)" gap={6} mt="12" mx="3">
				{products.map((p) => (
					<Product product={p} key={p._id} />
				))}
			</Grid>
		</div>
	);
};

export default Products;
