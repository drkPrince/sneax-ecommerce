import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import { useHistory, Link } from "react-router-dom";
import { calculateTotal } from "../utils";
import {
	Flex,
	Box,
	Heading,
	Button,
	Text,
	Select,
	Image,
	Badge,
} from "@chakra-ui/react";

const Cart = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);

	function handleClick() {
		if (user) history.push("/payment");
		else history.push("/login");
	}

	return (
		<Flex px="8" pt="16">
			<Box w="70vw" pr="12">
				{cart.cartItems.map((x) => (
					<Flex key={x.id} justifyContent="space-between" mb="8">
						<Box>
							<Text fontSize="2xl" fontWeight="600">
								<Link to={`/product/${x.id}`}>{x.name}</Link>
							</Text>
							<h5>Unit Price: ${x.price}</h5>
							<h5>Subtotal: ${x.price * x.quantity}</h5>
							<Flex alignItems="center">
								<label htmlFor="qty">Quantity </label>
								<Select
									w="4rem"
									mr="2"
									variant="filled"
									name="qty"
									value={x.quantity}
									onChange={(e) =>
										dispatch(
											addToCart({
												id: x.id,
												name: x.name,
												img: x.imageUrl,
												price: x.price,
												quantity: e.target.value,
											})
										)
									}
								>
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
								</Select>
							</Flex>
							<Button
								colorScheme="red"
								variant="outline"
								onClick={() => dispatch(removeFromCart(x.id))}
							>
								Remove
							</Button>
						</Box>
						<Box>
							<img width="150px" src={x.img} alt="" />
						</Box>
					</Flex>
				))}
			</Box>
			<Box w="30vw" bg="gray.50">
				<h1>Total charges: ${calculateTotal(cart.cartItems)}</h1>
				<h1>Shiping charges: $0.00</h1>
				<h1>Tax: $0.80</h1>
				<Button colorScheme="purple" onClick={handleClick}>
					Checkout
				</Button>
			</Box>
		</Flex>
	);
};

export default Cart;
