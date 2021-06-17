import { Flex, Box, Stack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../store/actions/userActions";

const Nav = () => {
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);

	const dispatch = useDispatch();

	const logoutUser = () => {
		dispatch(logout());
	};

	return (
		<Flex
			maxH="10vh"
			as="nav"
			alignItems="center"
			px={[8, 12, 24]}
			py={["8", "12"]}
		>
			<Flex
				alignItems="flex-end"
				fontWeight="600"
				textColor="purple.700"
				fontSize={["lg", "xl"]}
			>
				<Link to="/">sneax. </Link>
			</Flex>
			<Stack
				spacing={["3", "8", "12"]}
				direction="row"
				fontSize={["xs", "sm", "md"]}
				alignItems="center"
			>
				{user?.userInfo ? (
					<Stack
						className="nav-item"
						direction="row"
						spacing={["3", "8", "12"]}
					>
						<Box>
							<button className="logout-btn" onClick={logoutUser}>
								Logout
							</button>
						</Box>
						<Link to="/orders">Your orders</Link>
					</Stack>
				) : (
					<Stack
						className="nav-item"
						direction="row"
						spacing={["3", "8", "12"]}
					>
						<Link to="/login">Login</Link>
						<Link to="/signup">Signup</Link>
					</Stack>
				)}

				<Box position="relative">
					<Link to="/cart">
						<span className="cart-no">{cart.cartItems.length}</span>
						<svg
							className="cart-icon"
							width="27px"
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
			</Stack>
		</Flex>
	);
};

export default Nav;
