import axios from "axios";

export const login = (credentials) => async (dispatch) => {
	try {
		const res = await axios.post("/api/user/login", { ...credentials });
		dispatch({ type: "LOGIN", payload: { user: { ...res.data } } });
	} catch (e) {
		console.log(e.response.data.message);
		dispatch({
			type: "LOGIN",
			payload: { user: { error: e.response.data.message } },
		});
	}
};

export const logout = () => (dispatch) => {
	dispatch({ type: "LOGOUT" });
};

export const signup = (newCreds) => async (dispatch) => {
	const res = await axios.post("/api/user/signup", { ...newCreds });
	dispatch({ type: "SIGNUP", payload: { user: res.data } });
};
