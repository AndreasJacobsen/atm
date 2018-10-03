import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "../App";
import AllUsers from "./allUsers";

const UrlRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allUsers">All users</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={App} />
      <Route path="/allUsers" component={AllUsers} />
    </div>
  </Router>
);
export default UrlRouter;
