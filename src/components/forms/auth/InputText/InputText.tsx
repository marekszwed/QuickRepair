import { VisibilityOff, Visibility } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type InputLoginTypes = {
	id: string;
	name: string;
	label: string;
	type?: string;
	showPassword?: boolean;
	togglePasswordVisibility?: () => void;
};

const InputLoginText = ({
	name,
	label,
	type,
	showPassword,
	togglePasswordVisibility,
}: InputLoginTypes) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const isPasswordField = name === "password";

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					{...field}
					id={name}
					label={label}
					type={type}
					value={field.value}
					error={!!errors[name]}
					helperText={errors[name]?.message?.toString()}
					variant="standard"
					fullWidth
					slotProps={
						isPasswordField
							? {
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
								}
							: undefined
					}
				/>
			)}
		/>
	);
};

export default InputLoginText;
