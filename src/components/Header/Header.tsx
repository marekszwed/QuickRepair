"use client";
import * as S from "./Header.styled";
import theme from "@/styles/theme";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { useDialogState } from "@/hooks/useDialogState";
import Modal from "../common/Modal";
import AuthForm from "../forms/auth/AuthForm";
import MobileMenu from "./components/MobileMenu";
import { Pages, typedKeys } from "@/constants/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Routes } from "@/routes/routes";
import LogButton from "./components/LogButton";

function Header() {
	const modalState = useDialogState();
	const router = useRouter();

	const handleMenuItemClick = (page: string) => () => {
		if (page === Pages.Services) {
			router.push(Routes.services);
		} else {
			modalState.open();
		}
	};

	return (
		<>
			<S.Header position="fixed" color="secondary">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<AdbIcon
							sx={{
								display: {
									xs: "none",
									md: "flex",
									color: theme.palette.primary.main,
								},
								mr: 1,
							}}
						/>
						<S.Logo>
							<Link href="/">QuickRepair</Link>
						</S.Logo>
						<Box
							component="ul"
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								justifyContent: "flex-end",
								mr: "4rem",
								listStyle: "none",
								p: 0,
								m: 0,
							}}
						>
							<LogButton onModalState={modalState.open} />
						</Box>
						<MobileMenu
							onItemClick={handleMenuItemClick}
							typedKeys={typedKeys}
						/>
					</Toolbar>
				</Container>
			</S.Header>
			{modalState.isOpen && (
				<Modal onClose={modalState.close}>
					<AuthForm onSuccess={modalState.close} />
				</Modal>
			)}
		</>
	);
}
export default Header;
