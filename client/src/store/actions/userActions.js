
import axios from 'axios'

export const login = credentials => async (dispatch) => {
	const res = await axios.post('/api/user/login', {...credentials})
	dispatch({type: 'LOGIN', payload: {user: {...res.data}}})
}

export const logout = () => (dispatch) => {
	dispatch({type: 'LOGOUT'})
}

export const signup = (newCreds) => async (dispatch) => {
	const res = await axios.post('/api/user/signup', {...newCreds})
	dispatch({type: 'SIGNUP', payload: {user: res.data}})
}