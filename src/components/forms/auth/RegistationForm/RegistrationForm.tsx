"use client";
import { useMemo, useState } from "react";
import { flexColumnCenter } from "@/styles/mixins";
import { Box } from "@mui/material";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import Button from "@/components/common/Button";
import { LoginFormType } from "../LoginForm/LoginForm";
import { InputText, PasswordLiveCheck, Radios } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { Roles } from "@/constants/constants";
import {
	checkPassword,
	registrationSchema,
} from "../validation/registrationSchema";

type RegistrationFormType = LoginFormType & {
	name: string;
	surname: string;
	role: Roles;
};

const initialValues = {
	name: "",
	surname: "",
	email: "",
	password: "",
	role: Roles.Customer,
};

function RegistrationForm() {
	const [showPassword, setShowPassword] = useState(false);
	const formBag = useForm<RegistrationFormType>({
		resolver: zodResolver(registrationSchema),
		mode: "onChange",
		defaultValues: initialValues,
	});

	const password = useWatch({
		control: formBag.control,
		name: "password",
		defaultValue: "",
	});

	const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

	const passwordChecks = useMemo(() => checkPassword(password), [password]);

	const onSubmit = (data: unknown) => console.log(data);

	return (
		<FormProvider {...formBag}>
			<Box
				component="form"
				onSubmit={formBag.handleSubmit(onSubmit)}
				sx={{ ...flexColumnCenter, mx: 2, gap: 2 }}
			>
				<Radios
					name="role"
					options={[
						{ label: Roles.Customer, value: Roles.Customer },
						{ label: Roles.Specialist, value: Roles.Specialist },
					]}
				/>
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
