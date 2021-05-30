import { Link } from "react-router-dom";

const Product = ({ product }) => {
	return (
		<div>
			<Link to={`/product/${product._id}`}>
				<h2>{product.name}</h2>
			</Link>
			<div>
				<img width="100px" src={product.imageUrl} alt={product.name} />
			</div>
		</div>
	);
};

export default Product;
