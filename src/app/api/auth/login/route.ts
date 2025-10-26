import { getLoginUser } from "@/backend/auth/getLoginUsers";
import { postLoginUser } from "@/backend/auth/loginUser";

export async function GET() {
	return getLoginUser();
}

export async function POST(req: Request) {
	return postLoginUser(req);
}
