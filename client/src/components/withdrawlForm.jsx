import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import { Link } from 'react-router-dom';

class WithdrawalForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setAmount = amount => {
    return event => {
      this.setState({ amount });
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    const { amount } = this.state;

    // get our form data out of state
    const serverCardNumber = sessionStorage.getItem('cardnumber');

    axios({
      method: 'post',
      url: '/api/whidrawal',
      data: {
        amount,
        serverCardNumber
      }
    });
  };

  render() {
    const { amount } = this.state;
    return (
      <React.Fragment>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <h1>How much do you want to withdraw?</h1>
        <form onSubmit={this.handleSubmit} method="POST" action="/api/whidrawaly">
          <br />
          {/* Bytt ut med CSS block elementer eller wwnoe slikt, bytt name på form fields til å hentes via JS  */}
          <br />
          <div className="container">
            <Button
              type="submit"
              variant="contained"
              onClick={this.setAmount(200)}
              value="200"
              color="primary"
              className="floatLeft"
              defaultValue={amount}
              name="amount"
            >
              <div className="test">200 NOK</div>
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={this.setAmount(300)}
              value="300"
              color="primary"
              className="floatRight"
              defaultValue={amount}
              name="amount"
            >
              <div className="test">300 NOK</div>
            </Button>
            <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              onClick={this.setAmount(400)}
              value="400"
              color="primary"
              className="floatLeft"
              defaultValue={amount}
              name="amount"
            >
              <div className="test">400 NOK</div>
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={this.setAmount(500)}
              value="500"
              color="primary"
              className="floatRight"
              defaultValue={amount}
              name="amount"
            >
              <div className="test">500 NOK</div>
            </Button>
            <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              onClick={this.setAmount(700)}
              value="700"
              color="primary"
              className="floatLeft"
              defaultValue={amount}
              name="amount"
            >
              <div className="test"> 700 NOK</div>
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={this.setAmount(1000)}
              value="1000"
              color="primary"
              className="floatRight"
              defaultValue={amount}
              name="amount"
            >
              <div className="test">1000 NOK</div>
            </Button>
          </div>
          <br />
          <br />
          <div className="marginTop">
            <Button variant="contained" color="secondary" className="Knapp">
              <Link to="/otheramount" className="test">
                Other amount
              </Link>
            </Button>
          </div>
          <br />
          <br />
        </form>
      </React.Fragment>
    );
  }
}
export default WithdrawalForm;
