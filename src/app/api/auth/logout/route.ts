import logoutUser from "@/backend/auth/logoutUser";

export async function POST() {
	return logoutUser();
}
