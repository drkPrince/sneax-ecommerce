export const userReducer = (state = null, action) => {
	switch (action.type) {
		case "LOGIN_SUCCESS": {
			localStorage.setItem("userInfo", JSON.stringify(action.payload));
			return action.payload;
		}

		case "LOGIN_FAIL": {
			return action.payload;
		}

		case "SIGNUP_SUCCESS": {
			localStorage.setItem("userInfo", JSON.stringify(action.payload));
			return action.payload;
		}

		case "SIGNUP_FAIL": {
			console.log(action.payload.user);
			return action.payload;
		}

		case "LOGOUT": {
			localStorage.removeItem("userInfo");
			localStorage.removeItem("cart");
			state.user = null;
			window.location.href = "/";
			return state;
		}

		default:
			return state;
	}
};
