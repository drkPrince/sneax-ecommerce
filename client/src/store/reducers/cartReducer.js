export const cartReducer = (initialState = { cart: [] }, action) => {
	switch (action.type) {
		case "ADD_TO_CART": {
			const { id, name, img, price, quantity } = action.payload;
			if (!initialState.cart.find((x) => x.id === id)) {
				initialState.cart.push({ id, name, img, price, quantity });
				localStorage.setItem("cart", JSON.stringify(initialState.cart));
				return { ...initialState };
			} else if (
				initialState.cart.find(
					(x) => x.id === id && x.quantity !== quantity
				)
			) {
				const i = initialState.cart.findIndex((x) => x.id === id);
				initialState.cart[i].quantity = quantity;
				localStorage.setItem("cart", JSON.stringify(initialState.cart));
				return { ...initialState };
			} else return initialState;
		}

		case "REMOVE_FROM_CART": {
			const { id } = action.payload;
			if (initialState.cart.find((x) => x.id === id)) {
				const newCart = initialState.cart.filter((x) => x.id !== id);
				initialState.cart = newCart;
				localStorage.setItem("cart", JSON.stringify(newCart));
				return { ...initialState };
			} else return initialState;
		}

		default:
			return initialState;
	}
};
