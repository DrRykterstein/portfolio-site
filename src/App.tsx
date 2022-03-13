import { Switch, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { ScreenSizeProvider } from "./contexts/screenSizeContext";
import { Components } from "./components/Components";
import "./css/App.css";

function App() {
	// Initialize components from Components object
	const { Header, Intro, Portfolio, Contact, Footer } = Components;

	return (
		<ScreenSizeProvider>
			<main className="App">
				<Header />
				<div className="sections">
					<Intro />
					<Portfolio />
					<Contact />
				</div>
				<Footer />
			</main>
		</ScreenSizeProvider>
	);
}

export default App;
