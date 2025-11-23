import { Roles } from "@/constants/constants";
import { verifyToken } from "@/lib/auth";
import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

type DecodedToken = {
	id: string;
};

type UserResponse = {
	_id: string;
	name: string;
	email: string;
	role: Roles;
};

export async function getUserRole() {
	try {
		await connectToMongoDb();
		const cookieStore = await cookies();

		const token = cookieStore.get("authToken")?.value;
		if (!token) return NextResponse.json({ user: null }, { status: 401 });

		const decoded = verifyToken(token) as DecodedToken;

		if (!decoded.id) {
			return NextResponse.json(
				{ message: "Invalid token", user: null },
				{ status: 403 }
			);
		}

		const user = await User.findById<UserResponse>(decoded.id).select(
			"role name email"
		);

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
