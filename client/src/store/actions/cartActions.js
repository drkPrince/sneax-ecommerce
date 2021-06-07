import axios from "axios";

export const addToCart =
	({ id, name, img, price, quantity, size }) =>
	(dispatch) => {
		console.log(size);
		dispatch({
			type: "ADD_TO_CART",
			payload: { id, name, img, price, quantity, size },
		});
	};

export const removeFromCart = (id) => (dispatch) => {
	dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
};

export const addAddress =
	({ address, district, state, postalCode, country }) =>
	(dispatch) => {
		dispatch({
			type: "ADD_ADDRESS",
			payload: { address, district, state, postalCode, country },
		});
	};

export const createOrder = (order) => (dispatch, getState) => {
	const { user } = getState();
	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
			"Content-Type": "application/json",
		},
	};
	axios.post("/api/order", order, config);
	dispatch({ type: "CLEAR_CART" });
};
