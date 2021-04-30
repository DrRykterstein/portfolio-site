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
			<Link className="header__link header__textDecoration" to="/">
				<li className="header__linkText">Portfolio</li>
			</Link>
			<Link className="header__link header__textDecoration" to="/contact">
				<MuiButton className={classes.MuiButton}>Contact</MuiButton>
			</Link>
		</ul>
	);
};

export default DesktopMenu;
