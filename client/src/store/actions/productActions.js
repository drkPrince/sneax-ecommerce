
import axios from 'axios'

export const listProducts = () => async (dispatch) => {
	try {
		dispatch({type: 'PRODUCT_LIST_REQUEST'})
		const {data} = await axios.get('/api/products')
		dispatch({type: 'PRODUCT_LIST_SUCCESS', payload: data})
	}

	catch(e){
		dispatch({type: 'PRODUCT_LIST_FAILED', payload: e.message})
	}
}


export const bringProductDetails = (product_id) => async (dispatch) => {
	try {
		dispatch({type: 'PRODUCT_DETAILS_REQUEST'})
		const {data} = await axios.get(`/api/products/${product_id}`)
		dispatch({type: 'PRODUCT_DETAILS_SUCCESS', payload: data})
	}

	catch(e){
		dispatch({type: 'PRODUCT_DETAILS_FAILED', payload: e.message})
	}
}