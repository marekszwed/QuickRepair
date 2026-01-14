import { NextResponse } from "next/server";

export default async function logoutUser() {
	try {
		const response = NextResponse.json(
			{ message: "Logged out successfully" },
			{ status: 200 }
		);

		response.cookies.set({
			name: "authToken",
			value: "",
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			path: "/",
			sameSite: "lax",
			maxAge: 0,
		});

		return response;
	} catch (error) {
		console.error("Logout error:", error);

		return NextResponse.json({ error: "Logout failed" }, { status: 500 });
	}
}
