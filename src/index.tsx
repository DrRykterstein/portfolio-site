import { ThemeProvider } from "@material-ui/core";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router } from "react-router-dom";
import App from "./App";
import theme from "./theme";

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Router>
			<Route path="/" component={App} />
		</Router>
	</ThemeProvider>,
	document.getElementById("root")
);
