import { createMuiTheme } from "@material-ui/core";
import {
	blue,
	deepPurple,
	indigo,
	lightBlue,
} from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue[800],
			light: lightBlue[300],
		},
		secondary: {
			main: indigo[500],
			light: indigo[800],
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
