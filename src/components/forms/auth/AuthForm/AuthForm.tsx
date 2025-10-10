"use client";
import * as S from "./AuthForm.styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Tab, Tabs } from "@mui/material";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistationForm";

type FormValues = {
	mode: "login" | "register";
};

function AuthForm() {
	const [showTabs, setShowTabs] = useState(true);
	const { watch, setValue } = useForm<FormValues>({
		defaultValues: { mode: "login" },
	});

	const mode = watch("mode");

	const handleChangeVixibility = (
		_: React.SyntheticEvent,
		value: "login" | "register"
	) => {
		setValue("mode", value);
		console.log("Zmienono tryb na:", value);
	};

	return (
		<S.StyledPaper>
			{showTabs && (
				<Tabs value={mode} onChange={handleChangeVixibility} centered>
					<Tab value="login" label="login" />
					<Tab value="register" label="register" />
				</Tabs>
			)}
			<Box sx={{ mt: 2, width: "100%" }}>
				{mode === "login" ? <LoginForm /> : <RegistrationForm />}
			</Box>
			<Button onClick={() => setShowTabs((prev) => !prev)} sx={{ mt: 2 }}>
				{showTabs ? "Ukryj zakładki" : "Pokaż zakładki"}
			</Button>
		</S.StyledPaper>
	);
}

export default AuthForm;
