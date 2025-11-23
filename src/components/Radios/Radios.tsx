"use client";
import { RadioType } from "@/types/radiotype";
import * as S from "./styled";

function Radios({ name, options, selected, onChange }: RadioType) {
	return (
		<S.RadioBox>
			{options.map(({ id, label, value }) => (
				<label key={id} htmlFor={id}>
					<input
						type="radio"
						name={name}
						id={id}
						value={value}
						checked={selected === value}
						onChange={() => onChange(value)}
					/>
					{label}
				</label>
			))}
		</S.RadioBox>
	);
}

export default Radios;
