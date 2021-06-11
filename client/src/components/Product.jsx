import { Link } from "react-router-dom";
import { Text, Flex } from "@chakra-ui/react";

const Product = ({ product }) => {
	return (
		<Link className="product" to={`/product/${product._id}`}>
			<div style={{ minHeight: "200px", width: "100%" }}>
				<img src={product.imageUrl} alt={product.name} />
			</div>
			<Flex justifyContent="space-between">
				<Text noOfLines={1} textColor="gray.700" fontSize={["sm", "md"]}>
					{product.name}
				</Text>
			</Flex>
			<Text fontWeight="600">${product.price}</Text>
		</Link>
	);
};

export default Product;
