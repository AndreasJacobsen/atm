import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom';

class otherAmount extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      reason: ''
    };
    this.handleEvent = this.handleEvent.bind(this);
    {
      /* check if can be removed */
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent = e => {
    this.setState({ [e.target.amount]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { amount, reason } = this.state;

    axios.post('/api/formdata', { amount, reason }).then(result => {
      console.log(this.amount);
      console.log(result.amount);
    });
  };

  render() {
    const { amount, reason } = this.state;
    return (
      <React.Fragment>
        <h1> Please enter wanted ammount</h1>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <TextField
            required
            id="standard-required"
            label="Ammount to withdrawl"
            className="tekstfelt"
            margin="normal"
            defaultvalue={amount}
            name="amount"
            onChange={e => this.handleEvent(e)}
          />

          <br />
          <TextField
            id="standard-required"
            label="Reason"
            className="tekstfelt"
            margin="normal"
            defaultvalue={reason}
            name="reason"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <br />
          <div className="container">
            <Button type="submit" variant="contained" color="secondary" className="floatLeft">
              <Link to="/selectaction" className="test">
                Main menu
              </Link>
            </Button>
            <Button type="submit" variant="contained" color="primary" className="floatRight">
              <Link className="test" to="/confirmwithdrawl">
                Withdrawl
              </Link>
            </Button>
          </div>
        </form>
        <p className="marginTop">
          Amount: {this.state.amount} <br />
          Reason: {this.state.reason}
        </p>
      </React.Fragment>
    );
  }
}
export default otherAmount;
