import { createMuiTheme } from "@material-ui/core";
import {
	blue,
	blueGrey,
	indigo,
	lightBlue,
	teal,
	orange,
	deepOrange,
	red,
	lightGreen,
} from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue[800],
			dark: blue[900],
			light: lightBlue[300],
		},
		// secondary: {
		// 	main: indigo[500],
		// 	light: indigo[300],
		// },
		secondary: {
			main: lightGreen[500],
			dark: lightGreen[600],
			light: lightBlue[300],
		},
		info: {
			main: teal[600],
			light: teal[200],
		},
	},
	overrides: {
		MuiButton: {
			root: {
				textTransform: "none",
			},
		},
	},
	props: {
		MuiButton: {
			disableRipple: true,
			disableElevation: true,
		},
	},
});

export default theme;
