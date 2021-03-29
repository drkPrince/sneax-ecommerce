import {useEffect, useState} from 'react'
import axios from 'axios'
import Product from './components/Product'

const App = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		axios.get('/api/products')
			.then(res => setProducts(res.data))		
	}, [])

    return (
        <div className="App">
            <h2>Nile</h2>
            {products.map(p => <Product product={p} key={p._id} />)}
        </div>
    );
}

export default App;
