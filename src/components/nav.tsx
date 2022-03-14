import React from "react";
import { Link } from "react-router-dom";
import { useScreenSize } from "../contexts/screenSizeContext";
import { Components } from "./Components";
import { AppBar, Toolbar } from "@material-ui/core";
import "../css/nav.css";

const Header: React.FC = () => {
	const { DesktopMenu, MobileMenu } = Components;
	const { screenWidth } = useScreenSize();

	return (
		<Toolbar className="header">
			<a className="header__textDecoration" href="#">
				<h1 className="header__logo">Terioch</h1>
			</a>
			{screenWidth >= 568 ? <DesktopMenu /> : <MobileMenu />}
		</Toolbar>
	);
};

export default Header;
