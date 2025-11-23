import { getUserRole } from "@/backend/auth/getUserRole";
import { patchUsersRole } from "@/backend/auth/patchUsersRole";

export async function PATCH(request: Request) {
	return patchUsersRole(request);
}

export async function GET() {
	return getUserRole();
}
