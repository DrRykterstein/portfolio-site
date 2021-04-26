import React from "react";
import { Link } from "react-router-dom";
import { Controls } from "../controls/Controls";
import { makeStyles } from "@material-ui/core";

interface Props {}

const useStyles = makeStyles(() => ({
	MuiButton: {
		fontSize: "18px",
	},
}));

const DesktopMenu: React.FC<Props> = () => {
	const classes = useStyles();

	return (
		<ul className="header__menu">
			<Link className="header__link header__textDecoration" to="/">
				<li className="header__linkText">Portfolio</li>
			</Link>
			<Link className="header__link header__textDecoration" to="/contact">
				<Controls.MuiButton className={classes.MuiButton}>
					Contact
				</Controls.MuiButton>
			</Link>
		</ul>
	);
};

export default DesktopMenu;
