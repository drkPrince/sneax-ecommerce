import Products from "./screens/Products";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Payment from "./screens/Payment";
import Orders from "./screens/Orders";
import Nav from "./components/Nav";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Switch>

					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/product/:id">
						<ProductDetails />
					</Route>

					<Route path="/cart">
						<Cart />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/signup">
						<Signup />
					</Route>

					<Route path="/payment">
						<Payment />
					</Route>

					<Route path="/orders">
						<Orders />
					</Route>

					<Route path="*" component={NoMatch} status={404}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

const NoMatch = () => {
	return <h1 style={{textAlign:'center', fontSize: '1.4rem'}}>Page not Found. Are you lost? Go to <Link to='/'>Home.</Link></h1>
}

export default App;
