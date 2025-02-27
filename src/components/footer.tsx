import React from "react";
import { makeStyles } from "@material-ui/core";
import { Components } from "./Components";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: theme.spacing(2.1),
		textAlign: "center",
		backgroundColor: "#212121",
	},
	text: {
		color: "rgba(245, 245, 245, 0.719)",
		margin: theme.spacing(0.6),
	},
}));

const Footer: React.FC = () => {
	const classes = useStyles();
	const { Profiles } = Components;

	const currentYear = () => new Date().getFullYear().toString();

	return (
		<footer className={classes.root}>
			<Profiles component="Footer" />
			<p className={classes.text}>
				Techtrace Development | Copyright &copy; {currentYear()}
			</p>
		</footer>
	);
};

export default Footer;
