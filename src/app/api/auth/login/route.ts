import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET() {
	await connectToMongoDb();
	const loginUsers = await User.find();
	return NextResponse.json(loginUsers);
}

export async function POST(req: Request) {
	try {
		await connectToMongoDb();
		const { email, password } = await req.json();

		const user = await User.findOne({ email });
		if (!user)
			return NextResponse.json(
				{ message: "Incorrect email or password" },
				{ status: 401 }
			);

		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch)
			return NextResponse.json(
				{ message: "Incorrect email or password" },
				{ status: 401 }
			);
	} catch (error: unknown) {
		if (error instanceof Error) {
			return NextResponse.json({ message: error.message }, { status: 500 });
		}
		return NextResponse.json(
			{ message: "Unknown error occured" },
			{ status: 500 }
		);
	}
}
