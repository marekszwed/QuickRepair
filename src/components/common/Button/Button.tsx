import theme from "@/styles/theme";
import { Button, ButtonProps } from "@mui/material";

type ButtonType = ButtonProps & {
	text: string;
};

function PrimaryButton({ text, sx, ...props }: ButtonType) {
	return (
		<Button
			sx={{
				mt: 3,
				paddingInline: 3,
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.common.white,
				borderRadius: 3,
				...sx,
			}}
			{...props}
		>
			{text}
		</Button>
	);
}

export default PrimaryButton;
