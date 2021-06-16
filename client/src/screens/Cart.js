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
	Stack,
	Badge,
	FormLabel,
} from "@chakra-ui/react";

const Cart = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);

	const fontSize1 = ["lg", "xl", "2xl"];
	const fontSize2 = ["sm", "md", "md"];

	function handleClick() {
		if (user?.userInfo) history.push("/payment");
		else history.push("/login");
	}

	if (cart.cartItems.length === 0) {
		return (
			<Box px="8" pt="16">
				Cart is Empty
			</Box>
		);
	}

	return (
		<Flex
			px={["1", "1", "8"]}
			py="16"
			flexDirection={["column", "column", "row"]}
		>
			<Box w={["100%", "100%", "70vw"]} pr={["1", "1", "28"]}>
				{cart.cartItems.map((x) => (
					<Flex
						key={x.id}
						shadow="sm"
						mb="4"
						justifyContent={["flex-start", "space-between"]}
						alignItems="flex-start"
						borderRadius="7px"
						border="1px"
						borderColor="gray.200"
						p="3"
						flexDirection={["column", "row"]}
					>
						<Flex>
							<Box width={["30%"]}>
								<img w="100%" src={x.img} alt={x.name} />
							</Box>
							<Stack
								width={["70%"]}
								ml="5"
								spacing={["2", "2", "3"]}
							>
								<Text
									fontSize={fontSize1}
									fontWeight="400"
									textColor="gray.800"
									className="shoe-name"
								>
									<Link to={`/product/${x.id}`}>
										{x.name} ({x.size})
									</Link>
								</Text>
								<Flex fontSize={fontSize2}>
									<Text textColor="gray.500">Subtotal</Text>
									<Text
										mx="3"
										textColor="purple.800"
										fontWeight="600"
									>
										${x.price * x.quantity}.00
									</Text>
								</Flex>
								<Flex fontSize={fontSize2}>
									<Text textColor="gray.500">Unit Price</Text>
									<Text mx="3" textColor="purple.600">
										{x.price}.00
									</Text>
								</Flex>
								<Flex alignItems="center" fontSize={fontSize2}>
									<FormLabel
										fontSize={fontSize2}
										textColor="gray.500"
										htmlFor="qty"
									>
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
							</Stack>
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
			<Stack
				w={["100%", "100%", "30vw"]}
				spacing="3"
				px={["2", "2", "1"]}
				py={["6", "4", "2"]}
			>
				<Flex justifyContent="space-between" textColor="gray.700">
					<Text>Total amount</Text>
					<Text>{calculateTotal(cart.cartItems)}</Text>
				</Flex>
				<Flex justifyContent="space-between" textColor="gray.700">
					<Text>Shipping cost</Text>
					<Box>
						<Badge colorScheme="green">free</Badge>
					</Box>
				</Flex>
				<Flex justifyContent="space-between" textColor="gray.700">
					<Text>Taxes</Text>
					<Text>1.25</Text>
				</Flex>
				<hr />
				<Flex justifyContent="space-between" textColor="gray.900">
					<Box>Grand Total</Box>

					<Box fontWeight="600">
						${calculateTotal(cart.cartItems) + 1.25}
					</Box>
				</Flex>
				<hr />
				<Button
					colorScheme="purple"
					onClick={handleClick}
					w="100%"
					mt="8"
				>
					Checkout
				</Button>
			</Stack>
		</Flex>
	);
};

export default Cart;
