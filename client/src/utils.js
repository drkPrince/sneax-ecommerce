export function calculateTotal(cartItems) {
	let sum = 0;
	cartItems.forEach((x) => {
		sum = sum + Number(x.price) * Number(x.quantity);
	});
	return sum;
}
