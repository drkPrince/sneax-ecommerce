import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
	useToast,
	Flex,
	Box,
	Button,
	Text,
	Select,
	Image,
	Badge,
	FormLabel,
	Stack,
	Spinner,
} from "@chakra-ui/react";

import { bringProductDetails } from "../store/actions/productActions";
import { addToCart } from "../store/actions/cartActions";

const ProductDetails = () => {
	const toast = useToast();
	const { id } = useParams();
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const [selectedSize, setSelectedSize] = useState(7);

	const { productDetails, error, loading } = useSelector(
		(state) => state.productDetailss
	);
	const cart = useSelector((state) => state.cart);
	const isInCart = cart.cartItems.find((x) => x.id === id);

	useEffect(() => {
		dispatch(bringProductDetails(id));
	}, [dispatch, id]);

	const addItemToCart = () => {
		dispatch(
			addToCart({
				id,
				name: productDetails.name,
				img: productDetails.imageUrl,
				price: productDetails.price,
				size: selectedSize,
				quantity,
			})
		);
		toast({
			title: "Item Added",
			description: `${productDetails.name} has been added to cart!`,
			status: "success",
			duration: 3000,
			isClosable: true,
		});
	};

	if (error) return <p>Error</p>;

	if (loading)
		return (
			<Flex justifyContent="center" alignItems="center" mt="20%">
				<Spinner color="purple.700" size="xl" />
			</Flex>
		);

	return (
		<Box px={["2", "12"]}>
			<Flex flexDirection={["column", "column", "row"]} alignItems="center">
				<Box w={["100%", "100%", "50%"]} h="90vh">
					<Image
						boxSize="100%"
						objectFit="cover"
						src={productDetails?.imageUrl}
						alt={productDetails?.name}
					/>
				</Box>
				<Box
					px={["3", "6", "12"]}
					py={["6", "8", "0"]}
					w={["100%", "100%", "50%"]}
					justifyContent="center"
					flexDirection="column"
				>
					<Text
						fontSize={["2xl", "3xl", "4xl"]}
						textColor="gray.700"
						fontWeight="600"
						lineHeight="1.2"
					>
						{productDetails?.name}
					</Text>
					<Text fontWeight="400" fontSize="3xl" mb="4" textColor="gray.600">
						<Text fontSize="sm" as="sup">
							$
						</Text>
						{productDetails?.price}
						<Badge ml="2" colorScheme="cyan" variant="subtle">
							{productDetails?.type}
						</Badge>
					</Text>

					<Text
						mt="3"
						mb="5"
						textColor="gray.700"
						lineHeight="tall"
						fontSize="md"
					>
						{productDetails?.description}
					</Text>

					{isInCart ? (
						<Button colorScheme="cyan" variant="link" mt="5" size="lg">
							<Link to="/cart">
								<Flex alignItems="center">
									Go to cart
									<Box ml="1">
										<svg
											fill="none"
											width="1.2rem"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											/>
										</svg>
									</Box>
								</Flex>
							</Link>
						</Button>
					) : (
						<Box mt="3">
							<Stack spacing="2rem" direction="row">
								<Box>
									<FormLabel htmlFor="qty" fontWeight="600">
										Quantity
									</FormLabel>
									<Select
										variant="filled"
										colorScheme="purple"
										size="sm"
										name="qty"
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
									>
										<option value={1}>1</option>
										<option value={2}>2</option>
										<option value={3}>3</option>
										<option value={4}>4</option>
										<option value={5}>5</option>
									</Select>
								</Box>
								<Box>
									<FormLabel htmlFor="size" fontWeight="600">
										Size
									</FormLabel>
									<Select
										variant="filled"
										colorScheme="purple"
										size="sm"
										name="size"
										value={selectedSize}
										onChange={(e) => setSelectedSize(e.target.value)}
									>
										<option value={5}>US 5</option>
										<option value={6}>US 6</option>
										<option value={7}>US 7</option>
										<option value={8}>US 8</option>
										<option value={9}>US 9</option>
									</Select>
								</Box>
							</Stack>
							<Button
								colorScheme="purple"
								onClick={addItemToCart}
								w="100%"
								mt="12"
							>
								Add to cart
							</Button>
						</Box>
					)}
				</Box>
			</Flex>
		</Box>
	);
};

export default ProductDetails;
