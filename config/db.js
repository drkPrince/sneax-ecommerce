import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
		console.log(`MONGO Connected: ${con.connection.host}`.cyan.underline)
	}

	catch(e) {
		console.log(e.red.bold)
		process.exit(1)
	}
}

export default connectDB