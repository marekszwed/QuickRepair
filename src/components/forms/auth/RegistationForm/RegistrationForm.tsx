"use client";
import { useState } from "react";
import { flexColumnCenter } from "@/styles/mixins";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	Box,
	FormControl,
	FormControlLabel,
	FormHelperText,
	IconButton,
	InputAdornment,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";
import registrationSchema from "../validation/registrationSchema";
import Button from "@/components/common/Button";
import { LoginFormType } from "../LoginForm/LoginForm";

type RegistrationFormType = LoginFormType & {
	name: string;
	surname: string;
	role: "customer" | "specialist";
};

function RegistrationForm() {
	const [showPassword, setShowPassword] = useState(false);
	const { control, handleSubmit } = useForm<RegistrationFormType>({
		resolver: yupResolver(registrationSchema),
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
				control={control}
				name="role"
				render={({ field, fieldState }) => (
					<FormControl error={!!fieldState.error} variant="standard">
						<RadioGroup
							{...field}
							value={field.value || ""}
							row
							aria-labelledby="demo-row-radio-buttons-group-label"
							name="row-radio-buttons-group"
						>
							<FormControlLabel
								value="customer"
								control={<Radio />}
								label="Customer"
							/>
							<FormControlLabel
								value="specialist"
								control={<Radio />}
								label="Specialist"
							/>
						</RadioGroup>
						<FormHelperText>{fieldState.error?.message}</FormHelperText>
					</FormControl>
				)}
			/>
			<Controller
				control={control}
				name="name"
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						id="name"
						type=""
						label="name"
						value={field.value}
						error={!!fieldState.error?.message}
						helperText={fieldState.error?.message}
						variant="standard"
						fullWidth
					/>
				)}
			/>
			<Controller
				control={control}
				name="surname"
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						id="surname"
						type=""
						label="surname"
						value={field.value}
						error={!!fieldState.error?.message}
						helperText={fieldState.error?.message}
						variant="standard"
						fullWidth
					/>
				)}
			/>

			<Controller
				control={control}
				name="email"
				render={({ field, fieldState }) => (
					<TextField
						{...field}
						id="email"
						type="email"
						label="email"
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
			<Button type="submit" text="join us" />
		</Box>
	);
}

export default RegistrationForm;
