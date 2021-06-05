import { Link } from "react-router-dom";
import { Text, Flex } from "@chakra-ui/react";

const Product = ({ product }) => {
	return (
		<Link to={`/product/${product._id}`}>
			<div>
				<img width="100%" src={product.imageUrl} alt={product.name} />
			</div>
			<Flex justifyContent="space-between">
				<Text textColor="gray.700">{product.name}</Text>
				<Text fontWeight="600">${product.price}</Text>
			</Flex>
		</Link>
	);
};

export default Product;
