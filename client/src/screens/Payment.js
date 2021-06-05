import { useSelector, useDispatch } from "react-redux";
import { addAddress, createOrder } from "../store/actions/cartActions";
import { useState } from "react";
import {
	Flex,
	Box,
	Input,
	Text,
	Stack,
	Button,
	FormLabel,
	Radio,
	RadioGroup,
} from "@chakra-ui/react";
import { calculateTotal } from "../utils";

const Payment = () => {
	const user = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);
	const { addresses } = cart;
	const dispatch = useDispatch();
	const [address, setAddress] = useState(addresses[0] || null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const elements = e.target.elements;
		dispatch(
			addAddress({
				address: elements.address.value,
				state: elements.state.value,
				district: elements.district.value,
				postalCode: elements.postalCode.value,
				country: elements.country.value,
			})
		);
		return;
	};

	const order = () => {
		const order = {
			user: user.id,
			shippingAddress: address,
			totalPrice: calculateTotal(cart.cartItems),
			orderItems: cart.cartItems,
		};

		dispatch(createOrder(order));
	};

	return (
		<Box p="8">
			<div>
				<Text fontSize="2xl">Select Address</Text>

				{addresses.map((x, i) => (
					<Box
						bg={x.address === address.address ? "purple.200" : "white"}
						my="3"
						key={i}
						onClick={(e) => setAddress(x)}
					>
						<p>
							{x.address} in {x.country}
						</p>
					</Box>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<Stack spacing="12px" my="12">
					<Input name="address" type="text" placeholder="Address" />
					<Input type="text" placeholder="District" name="district" />
					<Input type="text" placeholder="State" name="state" />
					<Input type="text" placeholder="Postal code" name="postalCode" />
					<Input type="text" placeholder="Country" name="country" />
				</Stack>
				<Button w="12rem" colorScheme="green" type="submit" mt="2">
					Add address
				</Button>
			</form>
			<Button colorScheme="purple" onClick={order}>
				Order
			</Button>
		</Box>
	);
};

export default Payment;
