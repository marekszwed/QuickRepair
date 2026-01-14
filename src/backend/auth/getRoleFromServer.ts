import { verifyToken } from "@/lib/auth";
import connectToMongoDb from "@/lib/mongodb";
import User from "@/models/Users";
import { DecodedToken } from "@/types/token";
import { cookies } from "next/headers";

export async function getRoleFromServer() {
	try {
		await connectToMongoDb();
		const cookieStore = await cookies();
		const token = cookieStore.get("authToken")?.value;

		if (!token) {
			return { role: null };
		}

		const decodedToken = verifyToken(token) as DecodedToken;
		const user = await User.findById(decodedToken.id).select("role name email");

		return { role: user.role, user, error: null };
	} catch (error) {
		console.error("getRoleFromServer error:", error);
		return { role: null, user: null };
	}
}
