import * as z from "zod";

const loginSchema = z.object({
	email: z.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default loginSchema;
