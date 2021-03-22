import React from "react";
import { makeStyles } from "@material-ui/core";

interface Props {
  children: React.ReactNode;
  onSubmit: (e: React.MouseEvent<HTMLFormElement>) => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: "97%",
      margin: theme.spacing(1),
    }
  },
  MuiButton: {
    fontSize: "18px"
  }
}));

const Form: React.FC<Props> = ({ children, ...other }) => {
  const classes = useStyles(); // Instantiate contact form styles

  return (
    <form 
      className={classes.root} 
      autoComplete="off"
      {...other}
    >
      {children}
    </form>
  );
}

export default Form;