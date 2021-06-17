import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import App from "./App";

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Router>
			<Route path="/" component={App} />
		</Router>
	</ThemeProvider>,
	document.getElementById("root")
);
