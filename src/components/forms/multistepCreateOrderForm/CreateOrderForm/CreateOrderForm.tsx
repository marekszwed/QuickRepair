"use client";
import { FormProvider, useForm } from "react-hook-form";
import * as S from "./CreateOrderForm.styled";
import Stepper from "../Stepper";
import { useState } from "react";

function CreateOrderForm() {
	const [step, setStep] = useState(0);
	const formBag = useForm({});
	return (
		<S.StyledPaper>
			<FormProvider {...formBag}>
				<Stepper activeStep={step} setActiveStep={setStep} totalSteps={5} />
			</FormProvider>
		</S.StyledPaper>
	);
}

export default CreateOrderForm;
