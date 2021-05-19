
import User from '../models/userModel.js'

export const getCurrentUser = async (req, res) => {
	const allUsers = await User.find({})
	res.send(allUsers)
}

export const login = async (req, res) => {
	const {email, password}	= req.body
	const theUser = await User.findOne({email: email})
	if(theUser && (await theUser.comparePasswords(password))) {
		res.json({
			id: theUser._id,
			name: theUser.name,
			password: theUser.password,
			isAdmin: theUser.isAdmin,
			token: null
		})	
	} 

	else {
		res.status(401).send('Not Authorised. Invalid email or password')
	}
}