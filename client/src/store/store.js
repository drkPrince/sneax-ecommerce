import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers
import {productListReducer} from './reducers/productReducers'




const finalReducer = combineReducers({
	productList: productListReducer
})

const initialState = {}
const middleware = [thunk]


export const store = createStore(finalReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) 

