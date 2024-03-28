import { PaletteColorOptions, createMuiTheme } from "@material-ui/core";
import { blue, lightBlue, lightGreen, teal } from "@material-ui/core/colors";

declare module "@material-ui/styles" {
	interface Palette {
		info: PaletteColorOptions;
	}

	interface PaletteOptions {
		info: PaletteColorOptions;
	}
}

declare module "@material-ui/core/Button" {
	interface ButtonPropsColorOverrides {
		info: true;
		warning: true;
	}
}

const { palette } = createMuiTheme();
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
		info: palette.augmentColor({ main: teal[600] }),
		// info: {
		// 	main: teal[600],
		// 	light: teal[200],
		// },
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
