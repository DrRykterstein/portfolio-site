import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";

// Initialize reusable/generic component to render TextFields dynamically
const Input: React.FC<TextFieldProps> = ({
	label,
	multiline,
	rows,
	name,
	value,
	error = undefined, // Set default error value,
	helperText,
	onChange,
}) => {
	return (
		<TextField
			variant="outlined"
			label={label}
			multiline={multiline}
			rows={rows}
			name={name}
			color="primary"
			value={value}
			onChange={onChange}
			error={error}
			helperText={helperText}
			// {...(error && { error: true, helperText: error })}
		/>
	);
};

export default Input;
