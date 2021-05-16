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