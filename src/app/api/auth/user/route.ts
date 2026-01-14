import { getSpecificUser } from "@/backend/auth/getSpecificUser";

export async function GET() {
	return getSpecificUser();
}
