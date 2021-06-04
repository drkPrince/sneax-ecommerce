export const userReducer = (initialState = null, action) => {
	switch (action.type) {
		case "LOGIN": {
			localStorage.setItem("user", JSON.stringify(action.payload.user));
			return action.payload.user;
		}

		case "LOGOUT": {
			localStorage.removeItem("user");
			localStorage.removeItem("cart");
			initialState.user = null;
			window.location.href = "/";
			return initialState;
		}

		case "SIGNUP": {
			localStorage.setItem("user", JSON.stringify(action.payload.user));
			return action.payload.user;
		}

		default:
			return initialState;
	}
};
