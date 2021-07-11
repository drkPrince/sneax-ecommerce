import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/actions/userActions";
import { useHistory } from "react-router-dom";
import {
	Flex,
	Box,
	Button,
	Text,
	Input,
	FormLabel,
	VStack,
} from "@chakra-ui/react";

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const user = useSelector((state) => state.user);

	const loginUser = (e) => {
		e.preventDefault();
		const creds = {
			email: e.target.elements.email.value,
			password: e.target.elements.password.value,
		};
		dispatch(login(creds));
	};

	useEffect(() => {
		if (user?.token) {
			history.push("/");
		}
	}, [history, user]);

	return (
		<Flex justifyContent="center" alignItems="center" pt="6" mx="5">
			<form onSubmit={loginUser} w="50%">
				<VStack
					spacing="20px"
					shadow="md"
					p="8"
					bg="gray.50"
					border="2px"
					borderColor="gray.100"
				>
					<Text
						mb="3"
						textColor="gray.600"
						fontSize="3xl"
						fontWeight="600"
					>
						Login
					</Text>
					<Box w="100%">
						<FormLabel htmlFor="email">Email</FormLabel>
						<Input isRequired name="email" type="text" />
					</Box>
					<Box w="100%">
						<FormLabel htmlFor="password">Password</FormLabel>
						<Input isRequired name="password" type="password" />
					</Box>
					<Button
						isFullWidth
						colorScheme="purple"
						type="submit"
						mt="6"
					>
						Log in
					</Button>
					{user?.loginError && (
						<Text textColor="red.800">{user?.loginError}</Text>
					)}
				</VStack>
			</form>
		</Flex>
	);
};

export default Login;
