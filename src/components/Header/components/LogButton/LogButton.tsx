"use client";
import PrimaryButton from "@/components/common/Button";
import { Routes } from "@/routes/routes";
import { Box } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

type LogButtonProps = {
	onModalState: () => void;
};

function LogButton({ onModalState }: LogButtonProps) {
	const pathname = usePathname();
	const router = useRouter();
	const queryClient = useQueryClient();

	const isLanding = pathname === Routes.landingPage;

	const handleNavigateServices = () => router.push(Routes.services);

	const logOut = async () => {
		await axios.post("/api/auth/logout", {}, { withCredentials: true });
		queryClient.removeQueries({ queryKey: ["auth-user"] });
		router.refresh();
		router.push(Routes.landingPage);
	};

	return isLanding ? (
		<>
			<Box component="li">
				<PrimaryButton
					text="Services"
					onClick={handleNavigateServices}
					colorVariant="second"
					sx={{ my: 1 }}
				/>
			</Box>

			<Box component="li" sx={{ ml: 2 }}>
				<PrimaryButton
					text="Get Started"
					onClick={onModalState}
					colorVariant="primary"
					sx={{ my: 1 }}
				/>
			</Box>
		</>
	) : (
		<Box component="li">
			<PrimaryButton
				text="Log Out"
				onClick={logOut}
				colorVariant="primary"
				sx={{ my: 1 }}
			/>
		</Box>
	);
}

export default LogButton;
