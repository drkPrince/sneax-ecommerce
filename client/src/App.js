import Products from "./screens/Products";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Flex, Text, Box } from "@chakra-ui/react";

import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Payment from "./screens/Payment";
import Orders from "./screens/Orders";

import { logout } from "./store/actions/userActions";

const App = () => {
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);

	const dispatch = useDispatch();

	const logoutUser = () => {
		dispatch(logout());
	};

	return (
		<div className="App">
			<BrowserRouter>
				<Box as="nav">
					<Text fontWeight="600" fontSize="2xl">
						<Link to="/">Sneax 👟</Link>
					</Text>
					<Flex>
						{user ? (
							<Flex className="nav-item">
								{user && <h4>{user.name}</h4>}
								<Box>
									<button onClick={logoutUser}>Logout</button>
								</Box>
								<Link to="/orders">Your orders</Link>
							</Flex>
						) : (
							<div className="nav-item">
								<Link to="/login">Login</Link>
								<Link to="/signup">Signup</Link>
							</div>
						)}

						<Box position="relative">
							<Link to="/cart">
								<span className="cart-no">{cart.cartItems.length}</span>
								<svg
									className="cart-icon"
									width="30px"
									fill="none"
									stroke="#444"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
									/>
								</svg>
							</Link>
						</Box>
					</Flex>
				</Box>

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
