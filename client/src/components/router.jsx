import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MoneyForm from './moneyForm';
import logIn from './logIn';
import newuser from './newUser';
import AllUsers from './allUsers';
import selectAction from './selectAction';
import WithdrawalForm from './withdrawlForm';
import otherAmount from './otherAmount';
import confirmWithdrawl from './confirmWithdrawl';
import takeCard from './takeCard';
import takeCash from './takeCash';
import confirmTransfer from './confirmTransfer';
import finish from './finish';
import takeCardTrasnfer from './takeCardTransfer';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <b>Case 1: Withdrawl</b>
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
          <Link style={{ textDecoration: 'none', color: '' }} to="/otheramount">
            Other ammount
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/confirmwithdrawl">
            Confirm
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/takecash">
            Take cash
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/finish">
            Finish?
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/takecard">
            Take card
          </Link>{' '}
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
          <Link style={{ textDecoration: 'none', color: '' }} to="/confirmtransfer">
            Confirm
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/finish">
            Finish?
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/takecardtransfer">
            Take card
          </Link>{' '}
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
      <Route path="/otheramount" component={otherAmount} />
      <Route path="/confirmwithdrawl" component={confirmWithdrawl} />
      <Route path="/takecard" component={takeCard} />
      <Route path="/takecash" component={takeCash} />
      <Route path="/confirmtransfer" component={confirmTransfer} />
      <Route path="/finish" component={finish} />
      <Route path="/takecardtransfer" component={takeCardTrasnfer} />
    </div>
  </Router>
);
export default BasicExample;
