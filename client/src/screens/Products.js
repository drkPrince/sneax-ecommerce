import { useEffect, useState } from "react";
import axios from "axios";
import {
	Grid,
	Text,
	Box,
	Flex,
	Button,
	Stack,
	Menu,
	MenuButton,
	MenuList,
	MenuItemOption,
	MenuOptionGroup,
} from "@chakra-ui/react";
import Product from "../components/Product";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [productsCopy, setProductsCopy] = useState([]);
	const [sort, setSort] = useState(null);
	const [filters] = useState(["men", "women", "kids"]);

	useEffect(() => {
		axios.get("/api/products").then((res) => {
			setProductsCopy(res.data);
			setProducts(res.data);
		});
	}, []);

	const ascending = (a, b) => a.price - b.price;
	const descending = (a, b) => b.price - a.price;

	const filter = (params) => {
		const filtered = [...productsCopy].filter((x) =>
			params.includes(x.category)
		);
		let filteredAndSorted = filtered;
		if (sort) {
			switch (sort) {
				case "Price High to Low": {
					filteredAndSorted = filtered.sort(descending);
					setProducts(filteredAndSorted);
					return;
				}

				case "Price Low to High": {
					filteredAndSorted = filtered.sort(ascending);
					setProducts(filteredAndSorted);
					return;
				}

				default:
					return;
			}
		} else setProducts(filteredAndSorted);
	};

	const sortAscending = () => {
		setSort("Price Low to High");
		const sorted = [...products].sort(ascending);
		setProducts(sorted);
	};

	const sortDescending = () => {
		setSort("Price High to Low");
		const sorted = [...products].sort(descending);
		setProducts(sorted);
	};

	return (
		<>
			<Box pt="12" mx={[8, 12, 24]}>
				<Flex
					w="100%"
					direction={["column", "column", "column", "row"]}
					h="100vh"
					className="banner"
					style={{ overflow: "hidden" }}
				>
					<Box pr="2">
						<Text
							className="copy"
							fontSize={["3xl", "4xl", "5xl"]}
							lineHeight="1"
							mt={["2", "6", "12"]}
							textColor="purple.900"
							fontWeight="600"
						>
							Shop the best collection of sneakers. ever.
						</Text>
						<Text
							textColor="gray.700"
							mt="4"
							fontSize={["md", "lg", "xl"]}
							lineHeight={[1.5, 2, 8]}
						>
							Free shipping on your first order. Beautifully
							crafted collection. Lowest prices guaranteed. No
							questions asked returns.
						</Text>
						<Button mt="4" colorScheme="purple">
							<a href="#main">Shop Now</a>
						</Button>
					</Box>
					<Box maxH="70vh" className="img-con"></Box>
				</Flex>

				<Stack
					justifyContent="flex-end"
					mt={["8", "20"]}
					mb="12"
					spacer="20px"
					direction="row"
					id="main"
				>
					<Menu closeOnSelect={false}>
						<MenuButton
							size={["sm"]}
							as={Button}
							colorScheme="gray"
						>
							<Flex alignItems="center">
								<Text>Show Category</Text>
								<Box ml="1">
									<svg
										width="1rem"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
										/>
									</svg>
								</Box>
							</Flex>
						</MenuButton>
						<MenuList minWidth="240px">
							<MenuOptionGroup
								onChange={(e) => filter(e)}
								title="Category"
								defaultValue={filters}
								type="checkbox"
							>
								<MenuItemOption value="men">Men</MenuItemOption>
								<MenuItemOption value="women">
									Women
								</MenuItemOption>
								<MenuItemOption value="kids">
									Kids
								</MenuItemOption>
							</MenuOptionGroup>
						</MenuList>
					</Menu>

					<Menu>
						<MenuButton
							size={["sm"]}
							as={Button}
							colorScheme="gray"
						>
							<Flex alignItems="center">
								<Text>Sort</Text>
								<Box ml="1">
									<svg
										width="1.1rem"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
										/>
									</svg>
								</Box>
								<Text as="span" textColor="gray.500">
									{sort}
								</Text>
							</Flex>
						</MenuButton>
						<MenuList>
							<MenuOptionGroup title="Price" type="radio">
								<MenuItemOption
									onClick={sortAscending}
									value="asc"
								>
									Ascending
								</MenuItemOption>
								<MenuItemOption
									onClick={sortDescending}
									value="desc"
								>
									Descending
								</MenuItemOption>
							</MenuOptionGroup>
						</MenuList>
					</Menu>
				</Stack>
				{products.length === 0 ? (
					<Box w="100%" textAlign="center">
						Nothing Found
					</Box>
				) : (
					<Grid
						templateColumns={[
							"repeat(2, 1fr)",
							"repeat(3, 1fr)",
							"repeat(4, 1fr)",
						]}
						gap={6}
					>
						{products.map((p) => (
							<Product product={p} key={p._id} />
						))}
					</Grid>
				)}
			</Box>
		</>
	);
};

export default Products;
