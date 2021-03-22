import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Paper } from "@material-ui/core";
import "./css/App.css";
import { Components } from "./components/Components";

function App() {
  // Initialize components from Components object
  const {
    Header, 
    Portfolio,
    Contact,
    Footer
  } = Components;

  return (
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
  );
}

export default App;
