import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/actions/userActions";
import { useHistory } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const user = useSelector((state) => state.user);

	const loginUser = (e) => {
		e.preventDefault();
		const creds = {
			email: e.target.elements.email.value,
			password: e.target.elements.password.value,
		};
		dispatch(login(creds));
	};

	useEffect(() => {
		if (user !== null) {
			history.push("/");
		}
	}, [history, user]);

	return (
		<div>
			<form onSubmit={loginUser}>
				<label htmlFor="email">Email</label>
				<input name="email" type="text" />

				<label htmlFor="password">Password</label>
				<input name="password" type="password" />

				<button type="submit">Go</button>
			</form>
		</div>
	);
};

export default Login;
