import { HashRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
  </Router>,
  document.getElementById('root')
);
