import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { type Navigation } from "@toolpad/core/AppProvider";

export const navigation: Navigation = [
	{
		segment: "dashboard",
		title: "Dashboard",
		icon: <DashboardIcon />,
	},
	{
		segment: "orders",
		title: "Orders",
		icon: <ShoppingCartIcon />,
	},
];
