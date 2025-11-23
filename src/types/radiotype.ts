type RadioOption = {
	id: string;
	label: string;
	value: string;
};

export type RadioType = {
	name: string;
	options: RadioOption[];
	selected: string;
	onChange: (value: string) => void;
};
