import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
	Flex,
	Box,
	Heading,
	Button,
	Text,
	Select,
	Image,
	Badge,
	FormLabel,
} from "@chakra-ui/react";

import { bringProductDetails } from "../store/actions/productActions";
import { addToCart } from "../store/actions/cartActions";

const ProductDetails = () => {
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
	};

	if (error) return <p>Error</p>;

	if (loading) return <p>loading...</p>;

	return (
		<Box px="8">
			<Flex>
				<Box w="50%" maxHeight="90vh">
					<Image
						boxSize="100%"
						objectFit="cover"
						src={productDetails?.imageUrl}
						alt={productDetails?.name}
					/>
				</Box>
				<Box
					pt="12"
					px="16"
					w="50%"
					justifyContent="center"
					flexDirection="column"
				>
					<Text fontSize="4xl" textColor="gray.700">
						{productDetails?.name}
					</Text>
					<Text fontWeight="600" fontSize="2xl" my="2">
						<Text fontSize="sm" as="sup">
							$
						</Text>
						{productDetails?.price}
						<Badge ml="2" colorScheme="green" variant="subtle">
							Free Delivery
						</Badge>
					</Text>

					<Text mt="3" textColor="gray.700" lineHeight="tall" fontSize="md">
						{productDetails?.description}
					</Text>
					<Box mt="4" fontWeight="600" hidden>
						<Text>Select Size:</Text>
						<Flex justifyContent="start" mt="2">
							{[5, 6, 7, 8, 9, 10, 11].map((x) => (
								<Box>
									<FormLabel
										htmlFor={x}
										display="flex"
										justifyContent="center"
										alignItems="center"
										borderRadius="600px"
										w="9"
										h="9"
										textColor={selectedSize === x ? "white" : "gray.700"}
										bg={selectedSize === x ? "gray.500" : "white"}
									>
										<div>{x}</div>
									</FormLabel>
									<input
										onChange={(e) => setSelectedSize(Number(e.target.value))}
										id={x}
										type="radio"
										name="size"
										value={x}
										required
									/>
								</Box>
							))}
						</Flex>
					</Box>

					{isInCart ? (
						<Button colorScheme="cyan" variant="link" mt="8">
							<Link to="/cart">Go to cart</Link>
						</Button>
					) : (
						<Box mt="3">
							<Flex>
								<Box mr="5">
									<FormLabel htmlFor="qty" fontWeight="600">
										Quantity
									</FormLabel>
									<Select
										w="4rem"
										mr="2"
										variant="filled"
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
										w="4rem"
										mr="2"
										variant="filled"
										size="sm"
										name="size"
										value={selectedSize}
										onChange={(e) => setSelectedSize(e.target.value)}
									>
										<option value={5}>5</option>
										<option value={6}>6</option>
										<option value={7}>7</option>
										<option value={8}>8</option>
										<option value={9}>9</option>
									</Select>
								</Box>
							</Flex>
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
