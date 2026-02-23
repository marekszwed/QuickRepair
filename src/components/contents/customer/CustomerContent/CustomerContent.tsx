"use client";
import { useDialogState } from "@/hooks/useDialogState";
import CustomerCta from "../../CustomerCta";
import { Container } from "@mui/material";
import Modal from "@/components/common/Modal";
import CreateOrderForm from "@/components/forms/multistepCreateOrderForm/CreateOrderForm/CreateOrderForm";

function CustomerContent() {
	const modalState = useDialogState();
	return (
		<Container maxWidth="lg">
			<CustomerCta onClick={modalState.open} />
			{modalState.isOpen && (
				<Modal onClose={modalState.close}>
					<CreateOrderForm />
				</Modal>
			)}
		</Container>
	);
}

export default CustomerContent;
