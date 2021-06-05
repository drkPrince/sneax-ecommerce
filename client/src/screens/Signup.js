import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/actions/userActions";
import { useEffect } from "react";
import {
	Flex,
	Box,
	Button,
	Text,
	Input,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	VStack,
} from "@chakra-ui/react";

const Signup = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const history = useHistory();

	useEffect(() => {
		if (user !== null) history.push("/");
	}, [user]);

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
		<Box pt="12">
			<form onSubmit={signUpUser}>
				<VStack spacing="20px">
					<Text my="3" textColor="gray.600" fontSize="3xl">
						Create a new account
					</Text>
					<Box>
						<FormLabel htmlFor="name">Name</FormLabel>
						<Input isRequired name="name" type="text" />
					</Box>
					<Box>
						<FormLabel htmlFor="email">Email</FormLabel>
						<Input isRequired name="email" type="email" />
					</Box>
					<Box>
						<FormLabel htmlFor="password">Password</FormLabel>
						<Input isRequired name="password" type="new-password" />
					</Box>
					<Button colorScheme="green" type="submit">
						Create an account
					</Button>
				</VStack>
			</form>
		</Box>
	);
};

export default Signup;
