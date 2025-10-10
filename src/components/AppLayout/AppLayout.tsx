"use client";

import { ReactNode, useState } from "react";
import Header from "../Header";
import Modal from "../common/Modal";
import AuthForm from "../forms/auth/AuthForm";

interface AppLayoutProps {
	children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
	const [open, setOpen] = useState(false);

	const handleAuthOpen = () => setOpen(true);
	const handleAuthClose = () => setOpen(false);

	return (
		<>
			<Header onAuthOpen={handleAuthOpen} />
			{children}
			{open && (
				<Modal onClose={handleAuthClose}>
					<AuthForm />
				</Modal>
			)}
		</>
	);
}

export default AppLayout;
