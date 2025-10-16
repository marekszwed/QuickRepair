import { Pages } from "@/constants/constants";
import { Box, IconButton, MenuItem, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

type MobileMenuProps = {
	onItemClick: (page: Pages) => () => void;
	typedKeys: Array<keyof typeof Pages>;
};

function MobileMenu({ onItemClick, typedKeys }: MobileMenuProps) {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => setAnchorElNav(null);

	return (
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
				{typedKeys.map((page) => (
					<MenuItem key={page} onClick={onItemClick(Pages[page])}>
						<Typography sx={{ textAlign: "center" }}>{page}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}

export default MobileMenu;
