import * as yup from "yup";

const registrationSchema = yup.object({
	name: yup.string().required("Name is required"),
	surname: yup.string().required("Surname is required"),
	email: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: yup
		.string()
		.min(6, "Hasło musi mieć co najmniej 6 znaków")
		.required("Password id requirede"),
	role: yup
		.mixed<"customer" | "specialist">()
		.oneOf(["customer", "specialist"], "Select role")
		.required("Role is required"),
});

export default registrationSchema;
