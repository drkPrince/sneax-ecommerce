import {useEffect} from 'react'
import Product from './components/Product'

import {listProducts} from './store/actions/productActions'
import {useDispatch, useSelector} from 'react-redux'

const App = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)

    const {loading, error, products} = productList

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])


    if(error) return <p>Error</p>
        
    return (
        <div className="App">
            <h2>Nile</h2>
            {products.map(p => <Product product={p} key={p._id} />)}
        </div>
    );
}

export default App;
