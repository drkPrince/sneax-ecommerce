
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signup} from '../store/actions/userActions'
import {useEffect} from 'react'

const Signup = () => {

	const dispatch = useDispatch()
	const user = useSelector(state => state.user)
	const history = useHistory()


	useEffect(() => {
		if(user !== null) history.push('/')
	}, [user])

	const signUpUser = (e) => {
		e.preventDefault()
		const newUserCredentials = {name: e.target.elements.name.value, email: e.target.elements.email.value, password: e.target.elements.password.value}
		dispatch(signup(newUserCredentials))
	}

	return (
		<div>
			<form onSubmit={signUpUser}>
				<label htmlFor="name">Name</label>
				<input name='name' type="text" />

				<label htmlFor="email">Email</label>
				<input name='email' type="email" />

				<label htmlFor="password">Password</label>
				<input name='password' type="new-password" />

				<button type='submit'>Go</button>
			</form>
		</div>
	)
}

export default Signup