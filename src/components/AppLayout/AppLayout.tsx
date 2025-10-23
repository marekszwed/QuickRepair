"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import Header from "../Header";

interface AppLayoutProps {
	children: ReactNode;
}

const queryclient = new QueryClient();

function AppLayout({ children }: AppLayoutProps) {
	return (
		<>
			<QueryClientProvider client={queryclient}>
				<Header />
				{children}
			</QueryClientProvider>
		</>
	);
}

export default AppLayout;
