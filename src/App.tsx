import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { ScreenSizeProvider } from "./contexts/screenSizeContext";
import { Components } from "./components/Components";
import "./css/App.css";

function App() {
  // Initialize components from Components object
  const {
    Header, 
    Portfolio,
    Contact,
    Footer
  } = Components;

  return (
    <ScreenSizeProvider>
      <Router>
        <main className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Portfolio} />
            <Paper className={`contact__container`}>
              <Route path="/contact" component={Contact} />
            </Paper>
          </Switch> 
          <Footer /> 
        </main>
      </Router>
    </ScreenSizeProvider>
  );
}

export default App;
