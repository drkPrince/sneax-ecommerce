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
