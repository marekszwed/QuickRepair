import { z } from "zod";
import { NextResponse } from "next/server";
import connectToMongoDb from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { registrationSchema } from "@/components/forms/auth/validation/registrationSchema";
import { createToken, setAuthToken } from "@/lib/auth";
import User from "@/models/Users";
import { generateErrorResponse } from "@/utils/generateErrorResponse";

export async function postRegisterUser(request: Request) {
	try {
		await connectToMongoDb();

		const body = await request.json();

		const parsed = registrationSchema.safeParse(body);
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

		const { name, surname, email, password, role } = await parsed.data;

		const existing = await User.findOne({ email });
		if (existing) {
			return NextResponse.json(
				{ message: "Email już istnieje" },
				{ status: 400 }
			);
		}

		const hiddenPassword = await bcrypt.hash(password, 10);

		const newUser = await User.create({
			name,
			surname,
			email,
			password: hiddenPassword,
			role,
		});

		const token = createToken({ id: newUser._id, email: newUser.email });

		const res = NextResponse.json(
			{ id: newUser._id, email: newUser.email, role: newUser.role },
			{ status: 201 }
		);
		setAuthToken(res, token);
		return res;
	} catch (error: unknown) {
		generateErrorResponse(error, "Registration failed");
	}
}
