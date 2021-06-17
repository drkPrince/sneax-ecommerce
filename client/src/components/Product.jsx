import { Link } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";

const Product = ({ product }) => {
	return (
		<Link to={`/product/${product._id}`}>
			<Box
				borderRadius="7px"
				border="1px"
				borderColor="gray.200"
				className="product"
			>
				<div>
					<img src={product.imageUrl} alt={product.name} />
				</div>
				<Box px="4" pb="4">
					<Text
						noOfLines={1}
						textColor="gray.700"
						fontSize={["sm", "md"]}
						w="100%"
					>
						{product.name}
					</Text>
					<Text fontWeight="600">${product.price}</Text>
				</Box>
			</Box>
		</Link>
	);
};

export default Product;
