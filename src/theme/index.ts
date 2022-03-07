import { createMuiTheme } from "@material-ui/core";
import { blue, lightBlue, teal, lightGreen } from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue[700],
			dark: blue[800],
			light: lightBlue[200],
		},
		secondary: {
			main: lightGreen[500],
			dark: lightGreen[600],
			light: lightGreen[300],
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
