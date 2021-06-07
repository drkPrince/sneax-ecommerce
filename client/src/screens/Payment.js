import { useSelector, useDispatch } from "react-redux";
import { addAddress, createOrder } from "../store/actions/cartActions";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router-dom";
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
	const history = useHistory();
	const user = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);
	const { addresses } = cart;
	const dispatch = useDispatch();
	const [address, setAddress] = useState(addresses[0] || null);
	const [showAddAddress, setShowAddAddress] = useState(false);

	useEffect(() => {
		if (!user) {
			history.push("/login");
		}
	}, []);

	const onToken = async (token) => {
		const res = await axios.post("/api/payment", {
			amount: calculateTotal(cart.cartItems),
			token,
		});
		const order = {
			user: user.id,
			shippingAddress: address,
			totalPrice: calculateTotal(cart.cartItems),
			orderItems: cart.cartItems,
		};
		dispatch(createOrder(order));
	};

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

	return (
		<Box px="28" py="10">
			<div>
				<Text fontSize="2xl">Select Address</Text>
				<Stack mt="5" spacing="10px">
					{addresses.map((x, i) => (
						<Box
							bg={x === address ? "gray.200" : "white"}
							textColor={x === address ? "gray.700" : "gray.700"}
							borderRadius="4px"
							p="3"
							key={i}
							onClick={(e) => setAddress(x)}
						>
							<p>
								{Object.entries(x)
									.map((x) => x[1])
									.join(", ")}
							</p>
						</Box>
					))}
					<Box>
						<Button
							colorScheme={showAddAddress ? "red" : "cyan"}
							variant={showAddAddress ? "outline" : "ghost"}
							size="sm"
							mt="5"
							onClick={() => setShowAddAddress(!showAddAddress)}
						>
							{showAddAddress ? "Cancel" : "Add new address"}
						</Button>
					</Box>
				</Stack>
			</div>
			<Box
				my="8"
				style={{ display: showAddAddress ? "block" : "none" }}
				px="12"
				py="5"
				border="1px"
				borderColor="gray.200"
				borderRadius="6px"
			>
				<form onSubmit={handleSubmit}>
					<Stack spacing="12px" my="5">
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
			</Box>
			<Box mt="8">
				<StripeCheckout
					label="Place Order"
					name="Sneax"
					billingAddress
					shippingAddress
					amount={calculateTotal(cart.cartItems) * 100}
					panelLabel="Pay"
					token={onToken}
					stripeKey="pk_test_51IxqlgSFv3T0wJaKE0LvmDiL2ovRnHEa4vn13GghMzXSdm2bjPQuaqpKFvQk5QPUdQHsgEEyDJ1Otohv5eUSam4w00ZfYqBRj5"
				/>
			</Box>
		</Box>
	);
};

export default Payment;
