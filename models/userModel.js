import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
	name : {type: String, required: true},
	email : {type: String, required: true, unique: true},
	password : {type: String, required: true},
	isAdmin : {type: Boolean, required: true, default: false},
}, {timestamps: true})


//for comparing passwords
userSchema.methods.comparePasswords = async function(enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password)
}


//Do this before saving new user
userSchema.pre('save', async function(next) {
	if(this.isModified('password')){
		const salt = await bcrypt.genSalt(10)
		this.password = await bcrypt.hash(this.password, salt)
	}
	else next()	
})

const User = mongoose.model('User', userSchema)



export default User