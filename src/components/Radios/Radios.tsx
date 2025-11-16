"use client";
import * as S from "./styled";

type RadioType = {
	name: string;
	options: { label: string; value: string }[];
	onChange: (value: string) => void;
};

function Radios({ name, options, onChange }: RadioType) {
	return (
		<S.RadioBox>
			{options.map((opt) => (
				<label key={opt.value}>
					<input
						type="radio"
						name={name}
						value={opt.value}
						onChange={() => onChange?.(opt.value)}
					/>
					{opt.label}
				</label>
			))}
		</S.RadioBox>
	);
}

export default Radios;
