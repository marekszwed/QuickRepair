import { Roles } from "@/constants/constants";
import { verifyToken } from "@/lib/auth";
import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function patchUsersRole(request: Request) {
	try {
		await connectToMongoDb();
		const token = (await cookies()).get("authToken")?.value;

		if (!token)
			return NextResponse.json({ error: "Invalid token" }, { status: 401 });

		let decoded: { id: string };
		try {
			decoded = verifyToken(token) as { id: string };
		} catch (err) {
			return NextResponse.json({ message: "Invalid token" }, { status: 403 });
		}

		if (!decoded?.id) {
			return NextResponse.json(
				{ error: "Invalid token data" },
				{ status: 403 }
			);
		}

		const body = await request.json();
		const { role } = body;

		if (!role) {
			return NextResponse.json({ error: "Role is required" }, { status: 400 });
		}

		if (role !== Roles.Customer && role !== Roles.Specialist) {
			return NextResponse.json({ error: "Invalid role" }, { status: 400 });
		}

		const updatedUser = await User.findByIdAndUpdate(
			decoded.id,
			{ role },
			{ new: true }
		);

		if (!updatedUser) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}
		return NextResponse.json({ success: true, user: updatedUser });
	} catch (error) {
		return NextResponse.json(
			{ message: "Error updating role" },
			{ status: 500 }
		);
	}
}
