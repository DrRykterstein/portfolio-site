import { createMuiTheme } from "@material-ui/core";
import {
	blue,
	indigo,
	lightBlue,
	grey,
	teal,
	purple,
	deepOrange,
} from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue[800],
			light: lightBlue[300],
		},
		// secondary: {
		// 	main: indigo[500],
		// 	light: indigo[300],
		// },
		secondary: {
			main: grey[900],
			light: purple[300],
		},
		info: {
			main: grey[400],
			light: grey[200],
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
