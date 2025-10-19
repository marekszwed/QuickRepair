import {
	FormControl,
	RadioGroup,
	FormControlLabel,
	FormHelperText,
	Radio,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type RadioType = {
	name: string;
	options: { label: string; value: string }[];
};

function Radios({ name, options }: RadioType) {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<FormControl error={!!errors[name]} variant="standard">
					<RadioGroup
						{...field}
						value={field.value || ""}
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
					>
						{options.map((opt) => (
							<FormControlLabel
								key={opt.value}
								value={opt.value}
								control={<Radio />}
								label={opt.label}
							/>
						))}
					</RadioGroup>
					<FormHelperText>{errors[name]?.message?.toString()}</FormHelperText>
				</FormControl>
			)}
		/>
	);
}

export default Radios;
