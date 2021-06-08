import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Flex, Box, Text, Stack, StackDivider } from "@chakra-ui/react";

const Orders = () => {
	const history = useHistory();
	const user = useSelector((state) => state.user);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (!user.token) history.push("/login");
		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		};
		axios.get("/api/order", config).then((res) => setOrders(res.data));
	}, [user, history]);

	return (
		<Box pl="8" pr="16" py="12">
			<Text textColor="gray.600" fontSize="2xl" mb="6">
				Your Orders
			</Text>
			<Stack divider={<StackDivider borderColor="gray.200" />}>
				{orders.map((x) => (
					<Flex key={x._id} mb="4" justifyContent="space-between" w="100%">
						<Stack spacing="12px">
							<Box>
								<Text textColor="purple.500" fontSize="sm">
									Order number
								</Text>
								<Text textTransform="uppercase" textColor="gray.800">
									{x._id}
								</Text>
							</Box>

							<Box>
								<Text textColor="purple.500" fontSize="sm">
									Address
								</Text>
								<Text textColor="gray.800">
									{Object.entries(x.shippingAddress)
										.map((x) => x[1])
										.join(", ")}
								</Text>
							</Box>

							<Box>
								<Text textColor="purple.500" fontSize="sm">
									Ordered on
								</Text>
								<Text textColor="gray.800">
									{new Date(x.createdAt).toDateString()}
								</Text>
							</Box>

							<Box>
								<Text textColor="purple.500" fontSize="sm">
									Items
								</Text>
								<Text textColor="gray.800">
									{x.orderItems.map((y) => (
										<Text>{y.name}</Text>
									))}
								</Text>
							</Box>
						</Stack>

						<Box>
							<Text
								textTransform="uppercase"
								textColor="purple.800"
								fontSize="3xl"
							>
								${x.totalPrice}
							</Text>
						</Box>
					</Flex>
				))}
			</Stack>
		</Box>
	);
};

export default Orders;
