"use client";
import { useState } from "react";
import { flexColumnCenter } from "@/styles/mixins";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import registrationSchema from "../validation/registrationSchema";
import Button from "@/components/common/Button";
import { LoginFormType } from "../LoginForm/LoginForm";
import { InputText, Radios } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";

type RegistrationFormType = LoginFormType & {
	name: string;
	surname: string;
	role: "customer" | "specialist";
};

const initiialValues = {
	name: "",
	surname: "",
	email: "",
	password: "",
	role: "customer" as const,
};

function RegistrationForm() {
	const [showPassword, setShowPassword] = useState(false);
	const formBag = useForm<RegistrationFormType>({
		resolver: zodResolver(registrationSchema),
		mode: "onChange",
		defaultValues: { ...initiialValues },
	});

	const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

	const password = formBag.watch("password");
	const changeColor = (ok: boolean) => (ok ? "green" : "red");

	const checks = {
		length: password.length >= 8,
		upper: /[A-Z]/.test(password),
		lower: /[a-z]/.test(password),
		digit: /[0-9]/.test(password),
		special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
	};

	const onSubmit = (data: unknown) => console.log(data);

	return (
		<FormProvider {...formBag}>
			<Box
				component="form"
				onSubmit={formBag.handleSubmit(onSubmit)}
				sx={{ ...flexColumnCenter, mx: 2, gap: 2 }}
			>
				<Radios
					name="role"
					options={[
						{ label: "customer", value: "customer" },
						{ label: "specialist", value: "specialist" },
					]}
				/>
				<InputText id="name" name="name" label="name" type="" />
				<InputText id="surname" name="surname" label="surname" type="" />
				<InputText id="email" name="email" label="email" type="email" />
				<InputText
					id="password"
					name="password"
					label="password"
					type={showPassword ? "text" : "password"}
					togglePasswordVisibility={togglePasswordVisibility}
				/>
				<Box sx={{ mt: 1, mb: 1, alignSelf: "flex-start" }}>
					<Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
						Password requirements:
					</Typography>
					<Typography sx={{ color: changeColor(checks.length), fontSize: 13 }}>
						• Minimum 8 characters
					</Typography>
					<Typography sx={{ color: changeColor(checks.upper), fontSize: 13 }}>
						• Uppercase letter
					</Typography>
					<Typography sx={{ color: changeColor(checks.lower), fontSize: 13 }}>
						• Lowercase letter
					</Typography>
					<Typography sx={{ color: changeColor(checks.digit), fontSize: 13 }}>
						• Number
					</Typography>
					<Typography sx={{ color: changeColor(checks.special), fontSize: 13 }}>
						• Special character
					</Typography>
				</Box>
				<Button type="submit" text="join us" />
			</Box>
		</FormProvider>
	);
}

export default RegistrationForm;
