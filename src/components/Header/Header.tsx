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

function Header() {
	const modalState = useDialogState();

	const handleMenuItemClick = (page: string) => () => {
		if (page !== Pages.Services) modalState.open();
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
						<S.Logo variant="h4" noWrap component="a" href="/">
							QuickRepair
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
							{typedKeys.map((page) => (
								<Box component="li" key={page} sx={{ ml: 2 }}>
									<PrimaryButton
										onClick={handleMenuItemClick(Pages[page])}
										text={Pages[page]}
										sx={{
											my: 1,
											color:
												Pages[page] === Pages.GetStarted
													? theme.palette.common.white
													: theme.palette.common.black,
											backgroundColor:
												Pages[page] === Pages.GetStarted
													? theme.palette.primary.main
													: theme.palette.common.white,
											borderRadius: 3,
										}}
									></PrimaryButton>
								</Box>
							))}
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
