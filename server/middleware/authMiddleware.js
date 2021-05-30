import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export const protectRoutes = async (req, res, next) => {
	if(req.headers.authorization){
		const token = req.headers.authorization.split(' ')[1]
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET)
			//now req.user is available in every protected route
			req.user = await User.findById(decoded.userId).select('-password')
			next()
		}

		catch(e){
			res.send('Invalid Token')
		}
	}

	else {
		res.send('No Token Provided')
	}
}