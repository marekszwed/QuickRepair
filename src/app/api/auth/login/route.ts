import { getAllUsers } from "@/backend/auth/getAllUsers";
import { postLoginUser } from "@/backend/auth/loginUser";

export async function GET() {
	return getAllUsers();
}

export async function POST(req: Request) {
	return postLoginUser(req);
}
