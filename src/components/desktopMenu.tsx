import React from "react";
import { Link } from "react-router-dom";
import { SharedComponents } from "../shared-components/SharedComponents";
import { makeStyles } from "@material-ui/core";

interface Props {}

const useStyles = makeStyles(() => ({
	MuiButton: {
		fontSize: "18px",
	},
}));

const DesktopMenu: React.FC<Props> = () => {
	const classes = useStyles();
	const { MuiButton } = SharedComponents;

	return (
		<ul className="header__menu">
			<a className="header__link header__textDecoration" href="#">
				<li className="header__linkText">Home</li>
			</a>
			<a className="header__link header__textDecoration" href="#portfolio">
				<li className="header__linkText">Portfolio</li>
			</a>
			<a className="header__link header__textDecoration" href="#contact">
				<MuiButton className={classes.MuiButton}>Contact</MuiButton>
			</a>
		</ul>
	);
};

export default DesktopMenu;
