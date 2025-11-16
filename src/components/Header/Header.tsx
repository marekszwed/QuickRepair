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
import PrimaryButton from "../common/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Routes } from "@/routes/routes";

function Header() {
	const modalState = useDialogState();
	const router = useRouter();
	const pathname = usePathname();

	const showLogOut =
		pathname !== Routes.landingPage && pathname !== Routes.services;

	const handleMenuItemClick = (page: string) => () => {
		if (page === Pages.Services) {
			router.push(Routes.services);
		} else {
			modalState.open();
		}
	};

	const logOut = () => {
		router.push(Routes.landingPage);
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
							{showLogOut ? (
								<Box component="li" sx={{ ml: 2 }}>
									<PrimaryButton
										text="Log out"
										colorVariant="primary"
										sx={{ my: 1 }}
										onClick={logOut}
									/>
								</Box>
							) : (
								typedKeys.map((page) => {
									const isGetStarted = Pages[page] === Pages.GetStarted;

									return (
										<Box component="li" key={page} sx={{ ml: 2 }}>
											<PrimaryButton
												onClick={handleMenuItemClick(Pages[page])}
												text={Pages[page]}
												sx={{ my: 1 }}
												colorVariant={isGetStarted ? "primary" : "second"}
											/>
										</Box>
									);
								})
							)}
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
