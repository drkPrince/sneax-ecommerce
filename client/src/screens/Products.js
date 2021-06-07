import { useEffect, useState } from "react";
import axios from "axios";
import {
	Grid,
	Text,
	GridItem,
	Box,
	Flex,
	Button,
	Stack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
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
		setProducts(filtered);
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
		<Box py="12" mx="20">
			<Stack justifyContent="flex-end" my="6" spacer="20px" direction="row">
				<Menu closeOnSelect={false}>
					<MenuButton as={Button} colorScheme="blue">
						Filter
					</MenuButton>
					<MenuList minWidth="240px">
						<MenuOptionGroup
							onChange={(e) => filter(e)}
							title="Category"
							defaultValue={filters}
							Price
							type="checkbox"
						>
							<MenuItemOption value="men">Men</MenuItemOption>
							<MenuItemOption value="women">Women</MenuItemOption>
							<MenuItemOption value="kids">Kids</MenuItemOption>
						</MenuOptionGroup>
					</MenuList>
				</Menu>

				<Menu>
					<MenuButton as={Button}>
						Sort by{" "}
						<Text as="span" textColor="gray.500">
							{sort}
						</Text>
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
	);
};

export default Products;
