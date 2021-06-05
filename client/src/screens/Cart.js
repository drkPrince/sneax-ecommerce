import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import { useHistory, Link } from "react-router-dom";
import { calculateTotal } from "../utils";
import {
	Flex,
	Box,
	Button,
	Text,
	Select,
	Image,
	Badge,
	FormLabel,
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
			<Box w="70vw" pr="28">
				<Text fontSize="4xl" textColor="gray.600">
					Bag
				</Text>
				{cart.cartItems.map((x) => (
					<Flex
						key={x.id}
						my="4"
						justifyContent="space-between"
						borderRadius="7px"
						border="1px"
						borderColor="gray.200"
						p="3"
					>
						<Flex>
							<Box>
								<img width="150px" src={x.img} alt="" />
							</Box>
							<Box ml="5">
								<Text fontSize="2xl" fontWeight="400" textColor="gray.800">
									<Link to={`/product/${x.id}`}>{x.name}</Link>
								</Text>
								<Flex my="3">
									<Text textColor="gray.500">Price</Text>
									<Text mx="3" fontSize="md" textColor="purple.900">
										{x.price}.00
									</Text>
								</Flex>
								<Flex my="3">
									<Text textColor="gray.500">Subtotal</Text>
									<Text mx="3" fontSize="md" textColor="purple.700">
										{x.price * x.quantity}.00
									</Text>
								</Flex>
								<Flex alignItems="center" my="3">
									<FormLabel textColor="gray.500" htmlFor="qty">
										Quantity
									</FormLabel>
									<Select
										w="4rem"
										mr="2"
										size="sm"
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
							</Box>
						</Flex>
						<Button
							colorScheme="red"
							size="sm"
							variant="ghost"
							onClick={() => dispatch(removeFromCart(x.id))}
						>
							Remove
						</Button>
					</Flex>
				))}
			</Box>
			<Box w="30vw">
				<Text fontSize="4xl" textColor="gray.600">
					Summary
				</Text>
				<Flex my="3" justifyContent="space-between" textColor="gray.700">
					<Text>Total amount</Text>
					<Text>{calculateTotal(cart.cartItems)}</Text>
				</Flex>
				<Flex my="3" justifyContent="space-between" textColor="gray.700">
					<Text>Shipping cost</Text>
					<Box>
						<Badge colorScheme="green">free</Badge>
					</Box>
				</Flex>
				<Flex my="3" justifyContent="space-between" textColor="gray.700">
					<Text>Taxes</Text>
					<Text>1.25</Text>
				</Flex>
				<hr />
				<Flex
					justifyContent="space-between"
					fontSize="2xl"
					textColor="gray.900"
					my="3"
				>
					<Box>Grand Total</Box>
					<Box>${calculateTotal(cart.cartItems) + 1.25}</Box>
				</Flex>
				<hr />
				<Button colorScheme="purple" onClick={handleClick} w="100%" mt="12">
					Checkout
				</Button>
			</Box>
		</Flex>
	);
};

export default Cart;
