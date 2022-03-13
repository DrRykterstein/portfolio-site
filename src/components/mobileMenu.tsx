import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	makeStyles,
	IconButton,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {}

const useStyles = makeStyles(() => ({
	drawerPaper: {
		backgroundColor: "#212121",
	},
	burger: {
		color: "white",
	},
}));

const MobileMenu: React.FC<Props> = () => {
	const classes = useStyles();
	const [menuOpen, setMenuOpen] = useState(false);

	// Toggle open state of menu
	const handleBurgerMenu = () => setMenuOpen(!menuOpen);

	return (
		<>
			<IconButton className={classes.burger} onClick={handleBurgerMenu}>
				<MenuIcon />
			</IconButton>
			<Drawer
				classes={{ paper: classes.drawerPaper }}
				anchor="right"
				keepMounted
				elevation={16}
				open={menuOpen}
				onClose={handleBurgerMenu}
			>
				<List>
					<ListItem className="header__mobile__item" onClick={handleBurgerMenu}>
						<a className="header__link header__textDecoration" href="#">
							<ListItemText>Home</ListItemText>
						</a>
					</ListItem>
					<ListItem className="header__mobile__item" onClick={handleBurgerMenu}>
						<a
							className="header__link header__textDecoration"
							href="#portfolio"
						>
							<ListItemText>Portfolio</ListItemText>
						</a>
					</ListItem>
					<ListItem className="header__mobile__item" onClick={handleBurgerMenu}>
						<a className="header__link header__textDecoration" href="#contact">
							<ListItemText>Contact</ListItemText>
						</a>
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};

export default MobileMenu;
