const Product = ({ product }) => {
    return (
        <div>
			<div>
				<h6>{product._id}</h6>
			</div>
			<div>
				<h1>{product.name}</h1>
			</div>
			<div>
				<h3>{product.brand}</h3>
			</div>
		</div>
    )
}

export default Product