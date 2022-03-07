import React from "react";
import emailjs from "emailjs-com";
import { SharedComponents } from "../shared-components/SharedComponents";
import useForm from "../controls/useForm";
import { Grid, makeStyles } from "@material-ui/core";
import "../css/contact.css";

const useStyles = makeStyles(() => ({
	MuiButton: {
		fontSize: "18px",
	},
	root: {
		"&$focused": {
			color: "#4FC3F7",
		},
		"&$focused $notchedOutLine": {
			borderColor: "#4FC3F7",
		},
	},
}));

type E = React.MouseEvent<HTMLFormElement>;

// Initialize initial contact form options
const initialFormValues = {
	name: "",
	email: "",
	message: "",
};

const Contact: React.FC = () => {
	const classes = useStyles(); // Instantiate contact form styles
	const { Form, Input, MuiButton } = SharedComponents; // Extract reusable control components

	// Extract contact form values and errors from dynamic useForm function
	const {
		formValues,
		formErrors,
		setFormErrors,
		handleInputChange,
		resetForm,
	} = useForm(initialFormValues);

	// Validate contact details
	const validateDetails = () => {
		let temp = { ...formValues }; // Initialize temporary contact details to validate input values

		// Validate text field inputs
		temp.name = formValues.name ? "" : "This field is required.";
		temp.email = /$^|.+@.+..+/.test(formValues.email)
			? ""
			: "Please provide a valid Email address.";
		temp.message = formValues.message ? "" : "This field is required.";

		setFormErrors({ ...temp }); // Store error details in state

		return Object.values(temp).every((x) => x === ""); // Return true if input values either exist or are valid
	};

	// Send email upon submit
	const sendEmail = async (e: E) => {
		try {
			const result = await emailjs.sendForm(
				"gmail_dit3vnl",
				"portfolio_template",
				e.currentTarget,
				"user_KjeqDIChuQZZtV1bpVSjl"
			);
			console.log(result.text);
		} catch (err: any) {
			console.error(err.text);
		}
	};

	// Handle form submit
	const handleSubmit = (e: E) => {
		e.preventDefault();

		// Send message to email if form inputs are valid
		if (validateDetails()) {
			sendEmail(e);
			resetForm();
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<h1 className="contact__title">Queries</h1>
				<Grid container>
					<Grid item xs={12}>
						<Input
							label="Full Name*"
							name="name"
							value={formValues.name}
							error={formErrors.name ? true : false}
							helperText={formErrors.name}
							onChange={handleInputChange}
						/>
						<Input
							color="primary"
							label="Email"
							name="email"
							value={formValues.email}
							error={formErrors.email ? true : false}
							helperText={formErrors.email}
							onChange={handleInputChange}
						/>
						<Input
							color="primary"
							label="Message*"
							multiline={true}
							rows={5}
							name="message"
							value={formValues.message}
							error={formErrors.message ? true : false}
							helperText={formErrors.message}
							onChange={handleInputChange}
						/>
						<div className="contact__btn__container">
							<MuiButton
								className={classes.MuiButton}
								type="submit"
								color="secondary"
							>
								Send Message
							</MuiButton>
						</div>
					</Grid>
				</Grid>
			</Form>
		</>
	);
};

export default Contact;
