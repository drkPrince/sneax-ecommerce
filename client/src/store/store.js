import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers
import {productListReducer} from './reducers/productReducers'
import {productDetailsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducer'




const finalReducer = combineReducers({
	productList: productListReducer, 
	productDetailss: productDetailsReducer,
	cart: cartReducer
})

const initialState = {}
const middleware = [thunk]


export const store = createStore(finalReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) 

