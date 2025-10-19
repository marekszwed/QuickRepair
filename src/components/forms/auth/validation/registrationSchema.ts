import { Roles } from "@/constants/constants";
import { z } from "zod";

export const registrationSchema = z.object({
	name: z.string().min(1, "Name is required"),
	surname: z.string().min(1, "Surname is required"),
	email: z.email("Invalid email address"),
	password: z
		.string()
		.min(6, "Password must be at least 6 characters long")
		.regex(/[A-Z]/, "Password must contain at least one uppercase letter")
		.regex(/[a-z]/, "Password must contain at least one lowercase letter")
		.regex(/[0-9]/, "Password must contain at least one number")
		.regex(
			/[!@#$%^&*(),.?":{}|<>]/,
			"Password must contain at least one special character"
		),
	role: z.enum(Roles, { message: "Role is required" }),
});

export const passwordCheckSchema = z.object({
	length_ok: z.boolean(),
	upper_ok: z.boolean(),
	lower_ok: z.boolean(),
	digit_ok: z.boolean(),
	special_ok: z.boolean(),
});

export const checkPassword = (password: string) =>
	passwordCheckSchema.parse({
		length_ok: password.length >= 8,
		upper_ok: /[A-Z]/.test(password),
		lower_ok: /[a-z]/.test(password),
		digit_ok: /[0-9]/.test(password),
		special_ok: /[!@#$%^&*(),.?":{}|<>]/.test(password),
	});
