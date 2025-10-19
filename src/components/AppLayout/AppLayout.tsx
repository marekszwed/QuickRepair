"use client";

import { ReactNode } from "react";
import Header from "../Header";

interface AppLayoutProps {
	children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}

export default AppLayout;
