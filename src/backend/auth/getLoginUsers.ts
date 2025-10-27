import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import { NextResponse } from "next/server";

export async function getLoginUser() {
	try {
		await connectToMongoDb();
		const loginUsers = await User.find().select("-password");
		return NextResponse.json(loginUsers, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
