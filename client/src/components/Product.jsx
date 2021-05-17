import {Link} from 'react-router-dom'


const Product = ({ product }) => {
    return (
        <div>
			<div>
				<h6>{product._id}</h6>
			</div>
			<Link to={`/product/${product._id}`}>
				<h1>{product.name}</h1>
			</Link>
			<div>
				<h3>{product.brand}</h3>
			</div>
		</div>
    )
}

export default Product