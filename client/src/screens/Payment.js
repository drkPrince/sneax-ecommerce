import { useSelector, useDispatch } from "react-redux";
import { addAddress, createOrder } from "../store/actions/cartActions";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { Dialog } from "@reach/dialog";
import { useHistory } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import {
	useToast,
	Box,
	Text,
	Select,
	Input,
	Stack,
	Button,
	FormLabel,
	Radio,
	RadioGroup,
} from "@chakra-ui/react";
import { calculateTotal } from "../utils";

const Payment = () => {

	const toast = useToast();
	const history = useHistory();
	const user = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);
	const { addresses } = cart;
	const dispatch = useDispatch();
	const [address, setAddress] = useState(addresses[0] || null);
	const [region, setRegion] = useState("");
	const [country, setCountry] = useState("");
	const [showAddAddress, setShowAddAddress] = useState(false);

	useEffect(() => {
		if (!user?.token) {
			history.push("/login");
		}
	}, [user, history]);

	const onToken = async (token) => {
		await axios.post("/api/payment", {
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
		toast({
			title: "Order Placed",
			description: `Your Order has been successfully placed.`,
			status: "success",
			duration: 9000,
			isClosable: true,
		});
		history.push("/");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const elements = e.target.elements;
		dispatch(
			addAddress({
				address: elements.address.value,
				state: region,
				district: elements.district.value,
				postalCode: elements.postalCode.value,
				country: country,
			})
		);
		setShowAddAddress(false);
		return;
	};

	return (
		<Box px={["8", "12", "28"]} py="10">
			<div>
			<Dialog isOpen={showAddAddress} onDismiss={() => setShowAddAddress(false)}>
			<Box
				my="8"
				px="12"
				py="5"
			>
				<Text fontSize="2xl">Add a new address</Text>
				<form onSubmit={handleSubmit}>
					<Stack spacing="12px" my="5">
						<Input
							name="address"
							isRequired
							type="text"
							placeholder="Address (Street number, building number)"
						/>
						<Input
							type="text"
							isRequired
							placeholder="City, District"
							name="district"
						/>
						<Input
							type="text"
							isRequired
							placeholder="Postal/PIN code"
							name="postalCode"
						/>
						<Select
							as={CountryDropdown}
							value={country}
							isRequired
							onChange={(val) => setCountry(val)}
						/>{" "}
						/>
						<Select
							as={RegionDropdown}
							isRequired
							country={country}
							value={region}
							onChange={(val) => setRegion(val)}
						/>
					</Stack>
					<Button colorScheme="blue" type="submit" mt="2">
						Add address
					</Button>
				</form>
			</Box>
			</Dialog>
				<Stack mt="5" spacing="10px">
					<Box>
						<FormLabel
							htmlFor="address"
							fontSize="2xl"
							fontWeight="600"
						>
							Select address
						</FormLabel>
						<RadioGroup
							name="address"
							value={JSON.stringify(address)}
							onChange={(add) => setAddress(JSON.parse(add))}
						>
							<Stack spacing="1rem">
								{addresses.map((x, i) => (
									<Radio
										colorScheme="purple"
										value={JSON.stringify(x)}
										key={i}
										isRequired
									>
										{Object.entries(x)
											.map((x) => x[1])
											.join(", ")}
									</Radio>
								))}
							</Stack>
						</RadioGroup>
					</Box>
					<Box>
						<Button
							colorScheme="cyan"
							variant="outline"
							size="sm"
							mt="2"
							onClick={() => setShowAddAddress(!showAddAddress)}
						>
							Add new address
						</Button>
					</Box>
				</Stack>
			</div>
			
			<Box mt="12">
				<FormLabel
					htmlFor="payment-method"
					fontSize="2xl"
					fontWeight="600"
				>
					Select payment method
				</FormLabel>
				<RadioGroup name="payment-method" defaultValue="card">
					<Radio colorScheme="purple" isChecked value="card">
						Card
					</Radio>
				</RadioGroup>
			</Box>
			<Box mt="12">
				{address && (
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
				)}
			</Box>
		</Box>
	);
};

export default Payment;
