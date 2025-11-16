import { verifyToken } from "@/lib/auth";
import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function getUserRole() {
	try {
		await connectToMongoDb();

		const token = (await cookies()).get("authToken")?.value;
		if (!token) return NextResponse.json({ user: null }, { status: 401 });

		const decoded = verifyToken(token) as { id: string };

		if (!decoded.id) {
			return NextResponse.json(
				{ message: "Invalid token", user: null },
				{ status: 403 }
			);
		}

		const user = await User.findById(decoded.id).select("role name email");

		if (!user) {
			return NextResponse.json(
				{ message: "User not found", user: null },
				{ status: 404 }
			);
		}

		return NextResponse.json({ user, role: user.role });
	} catch (error) {
		return NextResponse.json({ user: null }, { status: 500 });
	}
}
