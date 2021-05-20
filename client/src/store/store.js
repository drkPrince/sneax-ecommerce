import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers
import {productListReducer} from './reducers/productReducers'
import {productDetailsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducer'
import {userReducer} from './reducers/userReducer'



const finalReducer = combineReducers({
	productList: productListReducer, 
	productDetailss: productDetailsReducer,
	cart: cartReducer,
	user: userReducer
})

const initialState = {
	cart: {cart: JSON.parse(localStorage.getItem('cart')) || [] },
	user: JSON.parse(localStorage.getItem('user')) || null 
}

const middleware = [thunk]


export const store = createStore(finalReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) 

