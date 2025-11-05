import { postRegisterUser } from "@/backend/auth/registerUser";
import { getAllUsers } from "@/backend/auth/getAllUsers";

export async function GET() {
	return getAllUsers();
}

export async function POST(request: Request) {
	return postRegisterUser(request);
}
