import AppLayout from "@/components/AppLayout";
import AppThemeProvider from "@/providers/AppThemeProvider";

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
					<div id="Modal" />
				</AppThemeProvider>
			</body>
		</html>
	);
}
