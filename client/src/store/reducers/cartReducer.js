export const cartReducer = (initialState={cart: []}, action) => {
	switch(action.type)
	{
		case 'ADD_TO_CART':
		{
			const p_id = action.product_id
			console.log(initialState)
			if(!initialState.cart.find(x => x.p_id===p_id)){
				console.log('adding')
				initialState.cart.push({p_id, name: action.product_name})
				return {...initialState}
			}
			else return initialState
		}

		case 'REMOVE_FROM_CART':
		{
			const p_id = action.product_id
			console.log(initialState)
			if(initialState.cart.find(x => x.p_id===p_id)){
				console.log('removing')
				const newCart = initialState.cart.filter(x => x.p_id!==p_id)
				console.log(newCart)
				initialState.cart = newCart
				return {...initialState}
			}

			else return initialState
		}

	default: return initialState
	}
}