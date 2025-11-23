import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function checkToken() {
	try {
		const token = (await cookies()).get("authToken")?.value;

		if (!token) {
			return {
				ok: false,
				response: { error: "Invalid token", status: 401 },
			};
		}

		let decoded: { id: string };
		try {
			decoded = verifyToken(token) as { id: string };
		} catch {
			return {
				ok: false,
				response: { error: "Invalid token", status: 403 },
			};
		}

		if (!decoded?.id) {
			return {
				ok: false,
				response: { error: "Invalid token data", status: 403 },
			};
		}

		return { ok: true, userId: decoded.id };
	} catch (error) {
		console.error("Token check error:", error);

		return {
			ok: false,
			response: { error: "Token validation error", status: 500 },
		};
	}
}
