import { z } from "zod";

const registrationSchema = z.object({
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
	role: z.enum(["customer", "specialist"]).refine((val) => !!val, {
		message: "Role is required",
	}),
});

export default registrationSchema;
