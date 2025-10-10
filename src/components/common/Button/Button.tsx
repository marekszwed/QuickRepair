import theme from "@/styles/theme";
import { Button, ButtonProps } from "@mui/material";

type ButtonType = ButtonProps & {
	text: string;
};

function PrimaryButton({ text, ...props }: ButtonType) {
	return (
		<Button
			sx={{
				mt: 3,
				paddingInline: 3,
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.common.white,
				...props,
			}}
			{...props}
		>
			{text}
		</Button>
	);
}

export default PrimaryButton;
