
import Products from './screens/Products'
import ProductDetails from './screens/ProductDetails'
import Cart from './screens/Cart'

import {BrowserRouter, Route, Link} from 'react-router-dom'

import {useSelector} from 'react-redux'

const App = () => {
    const cart = useSelector(state => state.cart)

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Link to='/cart'>Cart: {cart.cart.length}</Link>
                </div>

                <Route exact path='/'>
                    <Products />
                </Route>

                <Route path='/product/:id'>
                    <ProductDetails />
                </Route>

                <Route path='/cart/'>
                    <Cart />
                </Route>
                
            </BrowserRouter>
        </div>
    );
}

export default App;
