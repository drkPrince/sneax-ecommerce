export const productListReducer = (initalState={products: []}, action) => 
{
	switch(action.type)
	{
		case 'PRODUCT_LIST_REQUEST': 
		{
			return {loading: true, products: []}
		}

		case 'PRODUCT_LIST_SUCCESS': 
		{
			return {loading: false, products: action.payload}
		}

		case 'PRODUCT_LIST_FAILED': 
		{
			return {loading: false, error: action.payload}
		}

		default: return initalState 

	}
}

export const productDetailsReducer = (initalState={product: {}}, action) => 
{
	switch(action.type)
	{
		case 'PRODUCT_DETAILS_REQUEST': 
		{
			return {loading: true, productDetails: {}}
		}

		case 'PRODUCT_DETAILS_SUCCESS': 
		{
			return {loading: false, productDetails: action.payload}
		}

		case 'PRODUCT_DETAILS_FAILED': 
		{
			return {loading: false, error: action.payload}
		}

		default: return initalState 

	}
}