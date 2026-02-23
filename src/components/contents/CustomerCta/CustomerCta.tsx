"use client";
import { Box, Typography } from "@mui/material";
import { useConcreteUser } from "@/hooks/useConcreteUser";
import { flexColumnCenter } from "@/styles/mixins";
import PrimaryButton from "@/components/common/Button";

type CustomerCtaType = {
	onClick?: () => void;
};

function CustomerCta({ onClick }: CustomerCtaType) {
	const { data: user } = useConcreteUser();

	console.log(user?.email);

	return (
		<Box sx={{ ...flexColumnCenter }}>
			<Typography component="h2" variant="h4" sx={{ mt: 3, mb: 1 }}>
				Welcome {user?.name}
			</Typography>
			<Typography sx={{ my: 1 }}>
				Do you have something that needs fixing? Find a specialist in just a few
				minutes.
			</Typography>
			<PrimaryButton
				onClick={onClick}
				text="+ add an order"
				colorVariant="fourth"
				sx={(theme) => ({
					mx: 2,
					color: "black",
					fontSize: theme.typography.htmlFontSize,
				})}
			/>
		</Box>
	);
}

export default CustomerCta;
