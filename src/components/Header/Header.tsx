"use client";
import * as S from "./Header.styled";
import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

interface HeaderProps {
	onAuthOpen: () => void;
}

const pages = ["Services", "Log in", "Register"];

function Header({ onAuthOpen }: HeaderProps) {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => setAnchorElNav(null);

	return (
		<S.Header position="fixed" color="secondary">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<S.Logo
						variant="h4"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
					>
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
						{pages.map((page) => (
							<Box component="li" key={page} sx={{ ml: 2 }}>
								<Button
									onClick={() => {
										if (page !== "Services") onAuthOpen();
										handleCloseNavMenu();
									}}
									sx={{ my: 1, color: "white", display: "block" }}
								>
									<Typography variant="subtitle2">{page}</Typography>
								</Button>
							</Box>
						))}
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
							justifyContent: "space-between",
							alignItems: "center",
							width: "100%",
						}}
					>
						<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: "block", md: "none" } }}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={() => {
										if (page !== "Services") onAuthOpen();
										handleCloseNavMenu();
									}}
								>
									<Typography sx={{ textAlign: "center" }}>{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</S.Header>
	);
}
export default Header;
