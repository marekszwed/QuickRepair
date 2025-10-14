import AppLayout from "@/components/AppLayout";
import AppThemeProvider from "@/providers/AppThemeProvider";
import { MODAL_PORTAL_ID } from "@/constants/domElements";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body>
				<AppThemeProvider>
					<AppLayout>{children}</AppLayout>
					<div id={MODAL_PORTAL_ID} />
				</AppThemeProvider>
			</body>
		</html>
	);
}
