import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET() {
	await connectToMongoDb();
	const clients = await User.find();
	return NextResponse.json(clients);
}

export async function POST(request: Request) {
	try {
		await connectToMongoDb();
		const { name, surname, email, password, role } = await request.json();

		const existing = await User.findOne({ email });
		if (existing) {
			return NextResponse.json(
				{ message: "Email już istnieje" },
				{ status: 400 }
			);
		}

		const hiddenPassword = await bcrypt.hash(password, 10);

		const newUser = await User.create({
			name,
			surname,
			email,
			password: hiddenPassword,
			role,
		});

		return NextResponse.json(
			{ id: newUser._id, email: newUser.email, role: newUser.role },
			{ status: 201 }
		);
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error("Registration error:", error);
			return NextResponse.json({ message: error.message }, { status: 500 });
		}
		return NextResponse.json(
			{ message: "Unknown error occured" },
			{ status: 500 }
		);
	}
}
