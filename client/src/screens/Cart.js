import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions/cartActions";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	function calculateTotal() {
		let sum = 0;
		cart.cart.forEach((x) => {
			sum = sum + Number(x.price) * Number(x.quantity);
		});
		return sum;
	}

	return (
		<div>
			<h1>Total: {calculateTotal()}</h1>
			{cart.cart.map((x) => (
				<div key={x.id}>
					<h3>{x.name}</h3>
					<img width="100px" src={x.img} alt="" />
					<h5>Price: {x.price}</h5>
					<select
						name="qty"
						value={x.quantity}
						onChange={(e) =>
							dispatch(
								addToCart({
									id: x.id,
									name: x.name,
									img: x.imageUrl,
									price: x.price,
									quantity: e.target.value,
								})
							)
						}
					>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
					</select>
					<button onClick={() => dispatch(removeFromCart(x.id))}>
						Remove
					</button>
				</div>
			))}
			<button>Place Order</button>
		</div>
	);
};

export default Cart;
