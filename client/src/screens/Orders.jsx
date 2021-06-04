import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Orders = () => {
	const history = useHistory();
	const user = useSelector((state) => state.user);
	const [orders, setOrders] = useState(null);

	useEffect(() => {
		if (!user.token) history.push("/login");
		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		};
		if (user.token) {
			const { data } = axios.get("/api/order", config);
		}
	}, [user]);

	return (
		<div>
			<h1>Your Orders</h1>
		</div>
	);
};

export default Orders;
