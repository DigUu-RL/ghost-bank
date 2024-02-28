// ** MATERIAL UI
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";

// ** REACT
import { ChangeEvent, ReactNode } from "react";

interface IconInputProps {
	label: string;
	placeholder: string;
	type: string;
	icon: ReactNode;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	fullWidth?: boolean;
}

const IconInput = ({
	label,
	placeholder,
	type,
	icon,
	onChange,
	fullWidth,
}: IconInputProps) => {
	return (
		<FormControl fullWidth={fullWidth}>
			<InputLabel>{label}</InputLabel>

			<OutlinedInput
				label={label}
				placeholder={placeholder}
				type={type}
				fullWidth
				onChange={onChange}
				endAdornment={<InputAdornment position="end">{icon}</InputAdornment>}
			/>
		</FormControl>
	);
};

export default IconInput;
