import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MoneyForm from "./moneyForm";
import logIn from "./logIn";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Log in</Link>
        </li>
        <li>
          <Link to="/moneyform">Money form</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={logIn} />
      <Route path="/moneyform" component={MoneyForm} />
    </div>
  </Router>
);
export default BasicExample;
