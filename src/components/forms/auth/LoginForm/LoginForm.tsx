"use client";
import { useState } from "react";
import { TextField, IconButton, InputAdornment, Box } from "@mui/material";
import { flexColumnCenter } from "@/styles/mixins";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PrimaryButton from "@/components/common/Button";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../validation/loginSchema";

export type LoginFormType = {
	email: string;
	password: string;
};

function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const { control, handleSubmit } = useForm<LoginFormType>({
		resolver: yupResolver(loginSchema),
		defaultValues: { email: "", password: "" },
	});

	const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

	const onSubmit = (data: unknown) => console.log(data);

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{ ...flexColumnCenter, mx: 2, gap: 2 }}
		>
			<Controller
				name="email"
				control={control}
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						id="email"
						label="email"
						type="email"
						value={field.value}
						error={!!fieldState.error?.message}
						helperText={fieldState.error?.message}
						variant="standard"
						fullWidth
					/>
				)}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						id="password"
						label="password"
						type={showPassword ? "text" : "password"}
						value={field.value}
						error={!!fieldState.error?.message}
						helperText={fieldState.error?.message}
						variant="standard"
						fullWidth
						slotProps={{
							input: {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											onClick={togglePasswordVisibility}
											edge="end"
											aria-label={
												showPassword ? "Hide password" : "Show password"
											}
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							},
						}}
					/>
				)}
			/>
			<PrimaryButton type="submit" text="log in" />
		</Box>
	);
}

export default LoginForm;
