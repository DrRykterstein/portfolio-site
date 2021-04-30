import React from "react";
import { Button as MuiButton, ButtonProps, makeStyles } from "@material-ui/core";

// Define custom styles for button
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0.5)
  },
  label: {
    textTransform: "none"
  }
}));

// Initialize reusable/generic component to render Mui-buttons dynamically
const Button: React.FC<ButtonProps> = ({  
    variant, 
    color, 
    size, 
    children,
    ...other
  }) => {

  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      {...other}
      classes={classes}
    >
      {children}
    </MuiButton>
  );
}

export default Button;