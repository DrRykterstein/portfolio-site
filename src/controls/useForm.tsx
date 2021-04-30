import { useState } from "react";

type E = React.ChangeEvent<HTMLTextAreaElement>;

function useForm(initialFormValues: any) {
	// Initialize form values based on initial form values
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState({ ...initialFormValues });

	// Set contact details on input change
	const handleInputChange = (e: E) => {
		// Extract both name and value attributes
		const { name, value } = e.target;

		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	// Reset form values
	const resetForm = () => {
		setFormValues(initialFormValues);
		setFormErrors({});
	};

	return {
		formValues,
		setFormValues,
		formErrors,
		setFormErrors,
		handleInputChange,
		resetForm,
	};
}

export default useForm;
