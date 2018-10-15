import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MoneyForm from './moneyForm';
import logIn from './logIn';
import newuser from './newUser';
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
        <li>
          <Link to="/newuser">New user</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={logIn} />
      <Route path="/moneyform" component={MoneyForm} />
      <Route path="/newuser" component={newuser} />
    </div>
  </Router>
);
export default BasicExample;
