"use client";
import * as S from "./AuthForm.styled";
import { useForm } from "react-hook-form";
import { Box, Button, Tab, Tabs } from "@mui/material";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistationForm";
import { useDialogState } from "@/hooks/useDialogState";

enum FormMode {
	Login = "login",
	Register = "register",
}

type FormValues = {
	mode: FormMode;
};

const typedKeys = Object.keys(FormMode) as Array<keyof typeof FormMode>;

function AuthForm() {
	const { isOpen: showTabs, toggle } = useDialogState();
	const { watch, setValue } = useForm<FormValues>({
		defaultValues: { mode: FormMode.Login },
	});

	const mode = watch("mode");

	const handleChangeVisibility = (
		_: React.SyntheticEvent,
		value: "login" | "register"
	) => {
		setValue("mode", value as FormMode);
		console.log("Zmienono tryb na:", value);
	};

	const formComponents = {
		[FormMode.Login]: <LoginForm />,
		[FormMode.Register]: <RegistrationForm />,
	};

	return (
		<S.StyledPaper>
			{showTabs && (
				<Tabs value={mode} onChange={handleChangeVisibility} centered>
					<Tab value={FormMode.Login} label="login" />
					<Tab value={FormMode.Register} label="register" />
				</Tabs>
			)}
			<Box sx={{ mt: 2, width: "100%" }}>{formComponents[mode]}</Box>
			<Button onClick={toggle} sx={{ mt: 2 }}>
				{showTabs ? "Ukryj zakładki" : "Pokaż zakładki"}
			</Button>
		</S.StyledPaper>
	);
}

export default AuthForm;
