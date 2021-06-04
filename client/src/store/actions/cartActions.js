import axios from "axios";

export const addToCart =
	({ id, name, img, price, quantity }) =>
	async (dispatch) => {
		dispatch({
			type: "ADD_TO_CART",
			payload: { id, name, img, price, quantity },
		});
	};

export const removeFromCart = (id) => async (dispatch) => {
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
	console.log("alright");
	const { user } = getState();
	const config = {
		headers: {
			Authorization: `Bearer ${user.token}`,
			"Content-Type": "application/json",
		},
	};
	axios.post("/api/order", order, config);
};
