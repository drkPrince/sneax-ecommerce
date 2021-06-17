import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/actions/userActions";
import { useEffect } from "react";
import {
	Box,
	Flex,
	Button,
	Text,
	Input,
	FormLabel,
	VStack,
} from "@chakra-ui/react";

const Signup = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const history = useHistory();

	useEffect(() => {
		if (user && !user?.signUpError && !user?.loginError) history.push("/");
	}, [user, history]);

	const signUpUser = (e) => {
		e.preventDefault();
		const newUserCredentials = {
			name: e.target.elements.name.value,
			email: e.target.elements.email.value,
			password: e.target.elements.password.value,
		};
		dispatch(signup(newUserCredentials));
	};

	return (
		<Flex justifyContent="center" alignItems="center" pt="6" mx="5">
			<form onSubmit={signUpUser}>
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
						Sign Up
					</Text>
					<Box w="100%">
						<FormLabel htmlFor="name">Name</FormLabel>
						<Input isRequired name="name" type="text" />
					</Box>
					<Box w="100%">
						<FormLabel htmlFor="email">Email</FormLabel>
						<Input isRequired name="email" type="email" />
					</Box>
					<Box w="100%">
						<FormLabel htmlFor="password">Password</FormLabel>
						<Input
							minLength="6"
							isRequired
							name="password"
							type="new-password"
						/>
					</Box>
					<Button isFullWidth colorScheme="purple" type="submit">
						Create an account
					</Button>
					{user?.signUpError && (
						<Text textColor="red.800">{user?.signUpError}</Text>
					)}
				</VStack>
			</form>
		</Flex>
	);
};

export default Signup;
