import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { bringProductDetails } from "../store/actions/productActions";
import { addToCart, removeFromCart } from "../store/actions/cartActions";

const ProductDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);

	const { productDetails, error, loading } = useSelector(
		(state) => state.productDetailss
	);
	const cart = useSelector((state) => state.cart);
	const isInCart = cart.cart.find((x) => x.id === id);

	useEffect(() => {
		dispatch(bringProductDetails(id));
	}, [dispatch, id]);

	const addItemToCart = () => {
		dispatch(
			addToCart({
				id,
				name: productDetails.name,
				img: productDetails.imageUrl,
				price: productDetails.price,
				quantity,
			})
		);
	};

	const removeItemFromCart = () => {
		dispatch(removeFromCart(id));
	};

	if (error) return <p>Error</p>;

	if (loading) return <p>///Loading///</p>;

	return (
		<div>
			<h1>{productDetails?.name}</h1>
			<h4>{productDetails?.category}</h4>
			<img width="300px" src={productDetails?.imageUrl} />
			<p>Price-{productDetails?.price}</p>
			<p>{productDetails?.description}</p>
			{isInCart ? (
				<button onClick={removeItemFromCart}>Remove from cart</button>
			) : (
				<div>
					<select
						name="qty"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
					</select>
					<button onClick={addItemToCart}>Add to cart</button>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
