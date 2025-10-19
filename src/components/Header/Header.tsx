"use client";
import * as S from "./Header.styled";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useDialogState } from "@/hooks/useDialogState";
import Modal from "../common/Modal";
import AuthForm from "../forms/auth/AuthForm";
import MobileMenu from "./components/MobileMenu";
import { Pages, typedKeys } from "@/constants/constants";

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
						<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
						<S.Logo variant="h4" noWrap component="a" href="/">
							Quick Repair
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
									<Button
										onClick={handleMenuItemClick(Pages[page])}
										sx={{ my: 1, color: "white", display: "block" }}
									>
										<Typography variant="subtitle2">{page}</Typography>
									</Button>
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
					<AuthForm />
				</Modal>
			)}
		</>
	);
}
export default Header;
