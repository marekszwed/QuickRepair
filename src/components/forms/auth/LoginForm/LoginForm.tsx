"use client";
import { useState } from "react";
import { Box } from "@mui/material";
import { flexColumnCenter } from "@/styles/mixins";
import PrimaryButton from "@/components/common/Button";
import { FormProvider, useForm } from "react-hook-form";
import loginSchema from "../validation/loginSchema";
import InputText from "../InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthMutation } from "@/hooks/useAuthMutation";
import { useRouter } from "next/navigation";
import { Routes } from "@/routes/routes";

type LoginFormProps = {
	onSuccess?: () => void;
};

type LoginResponse = {
	user: {
		email: string;
		name: string;
	};
	message: string;
};

export type LoginFormType = {
	email: string;
	password: string;
};

function LoginForm({ onSuccess }: LoginFormProps) {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const formBag = useForm<LoginFormType>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: "", password: "" },
	});

	const loginMutation = useAuthMutation<LoginFormType, LoginResponse>(
		"/api/auth/login",
		{
			successMessage: "Login completed successfully",
			onSuccess: () => {
				router.push(Routes.clientPanel);
				alert("Login successful");
				onSuccess?.();
			},
		}
	);

	const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

	const onSubmit = (data: LoginFormType) => loginMutation.mutateAsync(data);

	return (
		<FormProvider {...formBag}>
			<Box
				component="form"
				onSubmit={formBag.handleSubmit(onSubmit)}
				sx={{ ...flexColumnCenter, mx: 2, gap: 2 }}
			>
				<InputText id="email" name="email" label="email" type="email" />
				<InputText
					id="password"
					name="password"
					label="password"
					type={showPassword ? "text" : "password"}
					togglePasswordVisibility={togglePasswordVisibility}
					showPassword={showPassword}
				/>
				<PrimaryButton type="submit" text="log in" />
			</Box>
		</FormProvider>
	);
}

export default LoginForm;
