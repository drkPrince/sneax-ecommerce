
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