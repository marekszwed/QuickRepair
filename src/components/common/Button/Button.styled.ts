import theme from "@/styles/theme";

export const buttonVariants = {
	primary: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	second: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.primary.main,
	},
	third: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	fourth: {
		backgroundColor: theme.palette.success.light,
		color: theme.palette.common.white,
	},
} as const;
