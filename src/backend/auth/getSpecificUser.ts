import { verifyToken } from "@/lib/auth";
import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import { DecodedToken } from "@/types/token";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function getSpecificUser() {
	try {
		await connectToMongoDb();
		const cookieStore = await cookies();
		const token = cookieStore.get("authToken")?.value;
		if (!token) return NextResponse.json({ loggedIn: false }, { status: 401 });

		const decoded = verifyToken(token) as DecodedToken;

		const user = await User.findById(decoded.id).select("-password");

		if (!user) return NextResponse.json({ loggedIn: false }, { status: 401 });

		return NextResponse.json({
			loggedIn: true,
			user,
		});
	} catch (error) {
		return NextResponse.json({ loggedIn: false }, { status: 500 });
	}
}
