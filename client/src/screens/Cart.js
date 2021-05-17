import {useSelector} from 'react-redux'

const Cart = () => {
	const cart = useSelector(state => state.cart)
	return (
		<div>
			{cart.cart.map(x => 
				<div key={x.p_id}>
					<h3>{x.name}</h3>
				</div>)
			}
		</div>
	)
}

export default Cart