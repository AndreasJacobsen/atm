import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MoneyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      transferAmount: '',
      transferNumber: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent = e => {
    this.setState({ [e.target.transferAmount]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { transferAmount, transferNumber } = this.state;

    axios.post('/api/formdata', { transferAmount, transferNumber }).then(result => {
      console.log(this.transferAmount);
    });
  };

  render() {
    const { transferAmount, transferNumber } = this.state;
    return (
      <React.Fragment>
        <h1> To whom and how much do you want to transfer?</h1>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <br />
          <TextField
            required
            id="standard-required"
            label="Transfer amount"
            className="tekstfelt"
            margin="normal"
            type="number"
            defaultvalue={transferAmount}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 4);
            }}
            name="transferAmount"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Reciver accountnumber"
            className="tekstfelt"
            margin="normal"
            type="number"
            defaultvalue={transferNumber}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 12);
            }}
            name="transferNumber"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary" className="Knapp">
            <Link to="/confirmtransfer" className="test">
              Transfer
            </Link>
          </Button>
        </form>
        <p className="marginTop">
          Transfer amount: {this.state.transferAmount} <br />
          Reciver accountnumber: {this.state.transferNumber}
        </p>
      </React.Fragment>
    );
  }
}
export default MoneyForm;
