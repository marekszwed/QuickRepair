"use client";
import { useMemo, useState } from "react";
import { flexColumnCenter } from "@/styles/mixins";
import { Box } from "@mui/material";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import Button from "@/components/common/Button";
import { LoginFormType } from "../LoginForm/LoginForm";
import { InputText, PasswordLiveCheck } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	checkPassword,
	registrationSchema,
} from "../validation/registrationSchema";
import { useAuthMutation } from "@/hooks/useAuthMutation";
import { useRouter } from "next/navigation";
import { Routes } from "@/routes/routes";
import { useDialogState } from "@/hooks/useDialogState";

type RegistrationFormProps = {
	onSuccess?: () => void;
};

type RegistrationResponse = {
	id: string;
	email: string;
};

export type RegistrationFormType = LoginFormType & {
	name: string;
	surname: string;
};

const initialValues = {
	name: "",
	surname: "",
	email: "",
	password: "",
};

function RegistrationForm({ onSuccess }: RegistrationFormProps) {
	const router = useRouter();
	// const closeForm = useDialogState();
	const [showPassword, setShowPassword] = useState(false);
	const formBag = useForm<RegistrationFormType>({
		resolver: zodResolver(registrationSchema),
		mode: "onChange",
		defaultValues: initialValues,
	});

	const registerMutation = useAuthMutation<
		RegistrationFormType,
		RegistrationResponse
	>("/api/users", {
		successMessage: "Registration complete successfully",
		onSuccess: () => {
			// closeForm.close();
			router.push(Routes.rolepage);
			alert("Registration complete successfuly");
			onSuccess?.();
		},
	});

	const password = useWatch({
		control: formBag.control,
		name: "password",
		defaultValue: "",
	});

	const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

	const passwordChecks = useMemo(() => checkPassword(password), [password]);

	const onSubmit = (data: RegistrationFormType) => {
		registerMutation.mutate(data);
	};

	return (
		<FormProvider {...formBag}>
			<Box
				component="form"
				onSubmit={formBag.handleSubmit(onSubmit)}
				sx={{ ...flexColumnCenter, mx: 2, gap: 2 }}
			>
				<InputText id="name" name="name" label="name" type="" />
				<InputText id="surname" name="surname" label="surname" type="" />
				<InputText id="email" name="email" label="email" type="email" />
				<InputText
					id="password"
					name="password"
					label="password"
					type={showPassword ? "text" : "password"}
					togglePasswordVisibility={togglePasswordVisibility}
				/>
				<PasswordLiveCheck passwordChecks={passwordChecks} />
				<Button type="submit" text="join us" />
			</Box>
		</FormProvider>
	);
}

export default RegistrationForm;
