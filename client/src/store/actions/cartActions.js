export const addToCart = ({product_id, product_name}) => async(dispatch) => {
	dispatch({type: 'ADD_TO_CART', product_id, product_name})
}

export const removeFromCart = (product_id) => async(dispatch) => {
	dispatch({type: 'REMOVE_FROM_CART', product_id})
}