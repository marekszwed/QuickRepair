import { z } from "zod";
import connectToMongoDb from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import loginSchema from "@/components/forms/auth/validation/loginSchema";
import { createToken, setAuthToken } from "@/lib/auth";
import User from "@/models/Users";
import { NextResponse } from "next/server";
import { generateErrorResponse } from "@/utils/generateErrorResponse";

export async function postLoginUser(req: Request) {
	try {
		await connectToMongoDb();

		const body = await req.json();

		const parsed = loginSchema.safeParse(body);
		if (!parsed.success) {
			const errors = z.treeifyError(parsed.error);
			return NextResponse.json(
				{
					message: "Validation error",
					errors,
				},
				{ status: 400 }
			);
		}

		const { email, password } = parsed.data;

		const user = await User.findOne({ email });
		if (!user)
			return NextResponse.json(
				{ message: "Incorrect email or password" },
				{ status: 401 }
			);

		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch)
			return NextResponse.json(
				{ message: "Incorrect email or password" },
				{ status: 401 }
			);

		const token = createToken({ id: user._id, email: user.email });
		const response = NextResponse.json({
			message: "Login successful",
			user: { email: user.email, name: user.name },
		});
		setAuthToken(response, token);
		return response;
	} catch (error: unknown) {
		generateErrorResponse(error, "Login failed");
	}
}
