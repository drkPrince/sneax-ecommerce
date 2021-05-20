
import Products from './screens/Products'
import {useSelector, useDispatch} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import ProductDetails from './screens/ProductDetails'
import Cart from './screens/Cart'
import Login from './screens/Login'
import Signup from './screens/Signup'

import {logout} from './store/actions/userActions'


const App = () => {
    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const logoutUser = () => {
        dispatch(logout())
    }

    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    {user ? 
                        <div>
                            {user && <h4>{user.name}</h4>}
                            <button onClick={logoutUser}>Logout</button>
                        </div>
                        :
                        <div>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Signup</Link>
                        </div>
                    }
                    <Link to='/cart'>Cart: {cart.cart.length}</Link>
                </nav>

                <Route exact path='/'>
                    <Products />
                </Route>

                <Route path='/product/:id'>
                    <ProductDetails />
                </Route>

                <Route path='/cart'>
                    <Cart />
                </Route>

                <Route path='/login'>
                    <Login />
                </Route>

                <Route path='/signup'>
                    <Signup />
                </Route>
                
            </BrowserRouter>
        </div>
    );
}

export default App;
