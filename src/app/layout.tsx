import Header from "@/common/Header";
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
					<Header />
					{children}
				</AppThemeProvider>
			</body>
		</html>
	);
}
