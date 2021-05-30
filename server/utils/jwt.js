import jwt from 'jsonwebtoken'

export const generateToken = (userId) => {
	return jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '30d'})
}