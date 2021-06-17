import Products from "./screens/Products";
import { BrowserRouter, Route } from "react-router-dom";

import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Payment from "./screens/Payment";
import Orders from "./screens/Orders";
import Nav from "./components/Nav";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />

				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/product/:id">
					<ProductDetails />
				</Route>

				<Route path="/cart">
					<Cart />
				</Route>

				<Route path="/login">
					<Login />
				</Route>

				<Route path="/signup">
					<Signup />
				</Route>

				<Route path="/payment">
					<Payment />
				</Route>

				<Route path="/orders">
					<Orders />
				</Route>
			</BrowserRouter>
		</div>
	);
};

export default App;
