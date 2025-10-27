import mongoose from "mongoose";

if (!process.env.NEXT_MONGO_URL) {
	throw new Error("NEXT_MONGO_URL not defined");
}

const URL = process.env.NEXT_MONGO_URL;

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function connectToMongoDb() {
	if (cached.conn) return cached.conn;
	if (!cached.promise) {
		cached.promise = mongoose.connect(URL).then((mongoose) => mongoose);
	}

	cached.conn = await cached.promise;
	return cached.conn;
}

export default connectToMongoDb;
