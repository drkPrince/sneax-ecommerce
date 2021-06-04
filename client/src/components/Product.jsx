import { Link } from "react-router-dom";

const Product = ({ product }) => {
	return (
		<Link to={`/product/${product._id}`}>
			<div>
				<img width="100%" src={product.imageUrl} alt={product.name} />
			</div>
			<h2>{product.name}</h2>
		</Link>
	);
};

export default Product;
