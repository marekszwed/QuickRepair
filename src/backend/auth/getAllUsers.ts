import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import { NextResponse } from "next/server";

export async function getAllUsers() {
	try {
		await connectToMongoDb();
		const clients = await User.find().select("-password");
		return NextResponse.json(clients, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
