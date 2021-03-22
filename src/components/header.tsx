import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import "../css/header.css";
import { Controls } from "../controls/Controls";

// Define custom Mui Styles
const useStyles = makeStyles(theme => ({
  MuiButton: {
    fontSize: "18px"
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <header className="header">
      <Link className="header__logo__container" to="/">
        <h1 className="header__logo">Terioch</h1>
      </Link>
      <ul className="header__menu">
        <Link className="header__link" to="/">
          <li className="header__linkText">Portfolio</li>
        </Link>
        <Link className="header__link" to="/contact">
          <Controls.MuiButton className={classes.MuiButton}>
            Contact
          </Controls.MuiButton>
        </Link>
      </ul>
    </header>
  );
}

export default Header;