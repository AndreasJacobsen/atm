import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MoneyForm from './moneyForm';
import logIn from './logIn';
import newuser from './newUser';
import AllUsers from './allUsers';
import selectAction from './selectAction';
import WithdrawalForm from './withdrawlForm';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <b>Case 1: Transfer money</b>
        <li style={{ listStyle: 'none' }}>
          <Link style={{ textDecoration: 'none', color: '' }} to="/">
            Log in
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/selectaction">
            Select action
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/withdrawl">
            Withdrawl form
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/moneyform">
            Confirm
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/moneyform">
            Take card
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/moneyform">
            Take cash
          </Link>
        </li>
        <b> Case 2: Withdrawl</b>
        <li style={{ listStyle: 'none' }}>
          <Link style={{ textDecoration: 'none', color: '' }} to="/">
            Log in
          </Link>
          {'  '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/selectaction">
            Select action
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/moneyform">
            Money form
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/moneyform">
            Confirm
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/moneyform">
            Take card
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/moneyform">
            Take cash
          </Link>
        </li>
        <b>Admin:</b>
        <li style={{ listStyle: 'none' }}>
          <Link style={{ textDecoration: 'none', color: '' }} to="/newuser">
            New user
          </Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={logIn} />
      <Route path="/moneyform" component={MoneyForm} />
      <Route path="/newuser" component={newuser} />
      <Route path="/allusers" component={AllUsers} />
      <Route path="/selectaction" component={selectAction} />
      <Route path="/withdrawl" component={WithdrawalForm} />
    </div>
  </Router>
);
export default BasicExample;
