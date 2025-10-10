"use client";
import * as S from "./Modal.styled";
import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
	onClose?: () => void;
	children?: ReactNode;
}

function Modal({ onClose, children }: ModalProps) {
	const [mounted, setMounted] = useState(false);
	const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setMounted(true);
		setModalRoot(document.getElementById("Modal"));
	}, []);

	if (!mounted || !modalRoot) return null;

	return ReactDOM.createPortal(
		<S.ModalOverlay onClick={onClose}>
			<div onClick={(e) => e.stopPropagation()}>{children}</div>
		</S.ModalOverlay>,
		modalRoot
	);
}

export default Modal;
