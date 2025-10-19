import { Box, Typography } from "@mui/material";

type PasswordLiveCheckProps = {
	passwordChecks: {
		length_ok: boolean;
		upper_ok: boolean;
		lower_ok: boolean;
		digit_ok: boolean;
		special_ok: boolean;
	};
};

function PasswordLiveCheck({ passwordChecks }: PasswordLiveCheckProps) {
	return (
		<Box sx={{ mt: 1, mb: 1, alignSelf: "flex-start" }}>
			<Typography
				sx={{
					color: passwordChecks.length_ok ? "green" : "red",
					fontSize: 13,
				}}
			>
				• Minimum 8 characters
			</Typography>
			<Typography
				sx={{
					color: passwordChecks.upper_ok ? "green" : "red",
					fontSize: 13,
				}}
			>
				• Uppercase letter
			</Typography>
			<Typography
				sx={{
					color: passwordChecks.lower_ok ? "green" : "red",
					fontSize: 13,
				}}
			>
				• Lowercase letter
			</Typography>
			<Typography
				sx={{
					color: passwordChecks.digit_ok ? "green" : "red",
					fontSize: 13,
				}}
			>
				• Number
			</Typography>
			<Typography
				sx={{
					color: passwordChecks.special_ok ? "green" : "red",
					fontSize: 13,
				}}
			>
				• Special character
			</Typography>
		</Box>
	);
}

export default PasswordLiveCheck;
