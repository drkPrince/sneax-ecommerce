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
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	"pk_test_51IxqlgSFv3T0wJaKE0LvmDiL2ovRnHEa4vn13GghMzXSdm2bjPQuaqpKFvQk5QPUdQHsgEEyDJ1Otohv5eUSam4w00ZfYqBRj5"
);

const Payment = () => {
	const user = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);
	const { addresses } = cart;
	const dispatch = useDispatch();
	const [address, setAddress] = useState(addresses[0] || null);
	const [showAddAddress, setShowAddAddress] = useState(false);

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

	const order = async (e) => {
		const order = {
			user: user.id,
			shippingAddress: address,
			totalPrice: calculateTotal(cart.cartItems),
			orderItems: cart.cartItems,
		};
		const stripe = await stripePromise;
		const response = await fetch("/api/order/create-checkout-session", {
			method: "POST",
		});
		const session = await response.json();
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});
		if (result.error) {
			console.log("Something wrong");
		}
		// dispatch(createOrder(order));
	};

	return (
		<Box px="28" py="10">
			<div>
				<Text fontSize="2xl">Select Address</Text>
				<Stack mt="5" spacing="10px">
					{addresses.map((x, i) => (
						<Box
							bg={x.address === address.address ? "gray.200" : "white"}
							textColor={
								x.address === address.address ? "gray.700" : "gray.700"
							}
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
			<Button
				mt="10"
				colorScheme="purple"
				onClick={order}
				isFullWidth
				size="lg"
			>
				Confirm Order
			</Button>
		</Box>
	);
};

export default Payment;
