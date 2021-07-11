import axios from "axios";

export const login = (credentials) => async (dispatch) => {
	try {
		const res = await axios.post("/api/user/login", { ...credentials });
		dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
	} catch (e) {
		dispatch({
			type: "LOGIN_FAIL",
			payload: { loginError: e.response.data.message },
		});
	}
};

export const signup = (newCreds) => async (dispatch) => {
	try {
		const res = await axios.post("/api/user/signup", { ...newCreds });
		dispatch({ type: "SIGNUP_SUCCESS", payload: res.data });
	} catch (e) {
		dispatch({
			type: "SIGNUP_FAIL",
			payload: { signUpError: e.response.data.message },
		});
	}
};

export const logout = () => (dispatch) => {
	dispatch({ type: "LOGOUT" });
};
