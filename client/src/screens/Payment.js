import { useSelector, useDispatch } from "react-redux";
import { addAddress, createOrder } from "../store/actions/cartActions";
import { useState } from "react";
import { calculateTotal } from "../utils";

const Payment = () => {
	const user = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);
	const { addresses } = cart;
	const dispatch = useDispatch();
	const [address, setAddress] = useState(addresses[0] || null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const elements = e.target.elements;
		dispatch(
			addAddress({
				address: elements.address.value,
				state: elements.state.value,
				district: elements.district.value,
				postalCode: elements.postalCode.value,
				country: elements.country.value,
			})
		);
		return;
	};

	const order = () => {
		const order = {
			user: user.id,
			shippingAddress: address,
			totalPrice: calculateTotal(cart.cartItems),
			orderItems: cart.cartItems,
		};

		dispatch(createOrder(order));
	};

	return (
		<div>
			<h3>Address and Payment</h3>
			<div>
				<h5>Saved addresses</h5>
				{addresses.map((x, i) => (
					<div key={i} onClick={(e) => setAddress(x)}>
						<p>
							{x.address} in {x.country}
						</p>
					</div>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<input name="address" type="text" placeholder="address" />
				<input type="text" placeholder="district" name="district" />
				<input type="text" placeholder="state" name="state" />
				<input
					type="text"
					placeholder="postal code"
					name="postalCode"
				/>
				<input type="text" placeholder="country" name="country" />
				<button type="submit">Add address</button>
			</form>
			<button onClick={order}>Order</button>
		</div>
	);
};

export default Payment;
