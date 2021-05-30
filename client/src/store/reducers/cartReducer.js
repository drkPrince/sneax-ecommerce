export const cartReducer = (initialState={cart: []}, action) => {
	switch(action.type)
	{
		case 'ADD_TO_CART':
		{
			const p_id = action.product_id
			if(!initialState.cart.find(x => x.p_id===p_id)){
				initialState.cart.push({p_id, name: action.product_name})
				localStorage.setItem('cart', JSON.stringify(initialState.cart))
				return {...initialState}
			}
			else return initialState
		}

		case 'REMOVE_FROM_CART':
		{
			const p_id = action.product_id
			if(initialState.cart.find(x => x.p_id===p_id)){
				const newCart = initialState.cart.filter(x => x.p_id!==p_id)
				initialState.cart = newCart
				localStorage.setItem('cart', JSON.stringify(newCart))
				return {...initialState}
			}

			else return initialState
		}

	default: return initialState
	}
}