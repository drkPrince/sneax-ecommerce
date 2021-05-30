import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log(`MONGO Connected: ${con.connection.host}`);
	} catch (e) {
		console.log("error_HERE", e);
		process.exit(1);
	}
};

export default connectDB;
