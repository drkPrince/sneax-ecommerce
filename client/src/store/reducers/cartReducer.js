export const cartReducer = (initialState = { cart: [] }, action) => {
	switch (action.type) {
		case "ADD_TO_CART": {
			const { id, name, img, price, quantity } = action.payload;
			if (!initialState.cartItems.find((x) => x.id === id)) {
				initialState.cartItems.push({ id, name, img, price, quantity });
				localStorage.setItem(
					"cart",
					JSON.stringify(initialState.cartItems)
				);
				return { ...initialState };
			} else if (
				initialState.cartItems.find(
					(x) => x.id === id && x.quantity !== quantity
				)
			) {
				const i = initialState.cartItems.findIndex((x) => x.id === id);
				initialState.cartItems[i].quantity = quantity;
				localStorage.setItem(
					"cart",
					JSON.stringify(initialState.cartItems)
				);
				return { ...initialState };
			} else return initialState;
		}

		case "REMOVE_FROM_CART": {
			const { id } = action.payload;
			if (initialState.cartItems.find((x) => x.id === id)) {
				const newCart = initialState.cartItems.filter(
					(x) => x.id !== id
				);
				initialState.cartItems = newCart;
				localStorage.setItem("cart", JSON.stringify(newCart));
				return { ...initialState };
			} else return initialState;
		}

		case "ADD_ADDRESS": {
			const { address, district, postalCode, country, state } =
				action.payload;

			localStorage.setItem(
				"addresses",
				JSON.stringify([
					...initialState.addresses,
					{ address, district, postalCode, country, state },
				])
			);

			return {
				cartItems: [...initialState.cartItems],
				addresses: [
					...initialState.addresses,
					{ address, district, postalCode, country, state },
				],
			};
		}

		default:
			return initialState;
	}
};
