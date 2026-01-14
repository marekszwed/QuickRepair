import { Roles } from "@/constants/constants";
import { checkToken } from "@/helpers/checkToken";
import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import { NextResponse } from "next/server";

export async function patchUsersRole(request: Request) {
	try {
		await connectToMongoDb();

		const tokenCheck = await checkToken();
		if (!tokenCheck.ok) {
			return NextResponse.json(
				{ error: tokenCheck.response!.error },
				{ status: tokenCheck.response!.status }
			);
		}

		const userId = tokenCheck.userId;

		const body = await request.json();
		const { role } = body;

		if (!role) {
			return NextResponse.json({ error: "Role is required" }, { status: 400 });
		}

		if (role !== Roles.Customer && role !== Roles.Specialist) {
			return NextResponse.json({ error: "Invalid role" }, { status: 400 });
		}

		const updatedUser = await User.findByIdAndUpdate(
			userId,
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
