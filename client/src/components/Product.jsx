const Product = ({ product }) => {
    return (
        <div>
			<div>
				<h5>Id</h5>
				<h1>{product._id}</h1>
			</div>
			<div>
				<h5>name</h5>
				<h1>{product.name}</h1>
			</div>
			<div>
				<h5>brand</h5>
				<h1>{product.brand}</h1>
			</div>
		</div>
    )
}

export default Product