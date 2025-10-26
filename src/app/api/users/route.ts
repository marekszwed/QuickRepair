import { postRegisterUser } from "@/backend/auth/registerUser";
import { getRegisterUser } from "@/backend/auth/getRegisterUsers";

export async function GET() {
	return getRegisterUser();
}

export async function POST(request: Request) {
	return postRegisterUser(request);
}
