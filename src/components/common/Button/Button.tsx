import { Button, ButtonProps } from "@mui/material";
import { buttonVariants } from "./Button.styled";

type ColorVariant = "primary" | "second" | "third" | "fourth";

type ButtonType = {
	text: string;
	colorVariant?: ColorVariant;
} & Omit<ButtonProps, "color">;

function PrimaryButton({
	text,
	colorVariant = "primary",
	sx,
	...props
}: ButtonType) {
	return (
		<Button
			sx={{
				mt: 3,
				paddingInline: 3,
				borderRadius: 3,
				...buttonVariants[colorVariant],
				...sx,
			}}
			{...props}
		>
			{text}
		</Button>
	);
}

export default PrimaryButton;
