import { useEffect, useState } from "react";
import axios from "axios";
import nike from "../assets/nike2.jpg";
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
	const [filters, setFilters] = useState(["men", "women", "kids"]);

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
			<Box py="12" mx="24">
				<Box w="100%">
					<Text
						className="copy"
						fontSize="6xl"
						lineHeight="1"
						textAlign="center"
						mt="12"
						textColor="gray.700"
					>
						Shop the best collection of{" "}
						<Box as="span" textColor="purple.700">
							sneakers.
						</Box>
					</Text>
				</Box>

				<Stack
					justifyContent="flex-end"
					mt="20"
					mb="12"
					spacer="20px"
					direction="row"
				>
					<Menu closeOnSelect={false}>
						<MenuButton size="sm" as={Button} colorScheme="gray">
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
								<MenuItemOption value="women">Women</MenuItemOption>
								<MenuItemOption value="kids">Kids</MenuItemOption>
							</MenuOptionGroup>
						</MenuList>
					</Menu>

					<Menu>
						<MenuButton size="sm" as={Button} colorScheme="gray">
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
								<MenuItemOption onClick={sortAscending} value="asc">
									Ascending
								</MenuItemOption>
								<MenuItemOption onClick={sortDescending} value="desc">
									Descending
								</MenuItemOption>
							</MenuOptionGroup>
						</MenuList>
					</Menu>
				</Stack>
				<Grid templateColumns="repeat(5, 1fr)" gap={6}>
					{products.length === 0 ? (
						<Box>Nothing Found</Box>
					) : (
						products.map((p) => <Product product={p} key={p._id} />)
					)}
				</Grid>
			</Box>
		</>
	);
};

export default Products;
