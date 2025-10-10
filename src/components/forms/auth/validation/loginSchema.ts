import * as yup from "yup";

const loginSchema = yup.object({
	email: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: yup.string().min(6).required("Password id required"),
	// role: yup.string().oneOf(["customer", "specialist"], "Select account type"),
});

export default loginSchema;
