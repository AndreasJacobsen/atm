import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class newuser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      balance: '',
      address: '',
      ssn: '',
      bankNumber: '',
      //Card information
      type: '',
      cardNumber: '',
      cvc: '',
      expirationDate: '',
      pin: ''
    };
    this.handleEvent = this.handleEvent.bind(this);
    {
      /* check if can be removed */
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const {
      name,
      balance,
      address,
      ssn,
      bankNumber,
      type,
      cardNumber,
      cvc,
      expirationDate,
      pin
    } = this.state;

    axios
      .post('/api/newuser', {
        name,
        balance,
        address,
        ssn,
        bankNumber,
        type,
        cardNumber,
        cvc,
        expirationDate,
        pin
      })
      .then(result => {
        console.log(this.cardNumber);
        console.log(cardNumber);
      });
  };

  render() {
    const {
      name,
      balance,
      address,
      ssn,
      bankNumber,
      type,
      cardNumber,
      cvc,
      expirationDate,
      pin
    } = this.state;
    return (
      <React.Fragment>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <h1> New user</h1>
        <form>
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <TextField
            required
            id="standard-required"
            label="Name"
            className="tekstfelt"
            margin="normal"
            defaultValue={name}
            name="name"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Balance"
            className="tekstfelt"
            margin="normal"
            defaultValue={balance}
            name="balance"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Address"
            className="tekstfelt"
            margin="normal"
            defaultValue={address}
            name="address"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="SSN"
            className="tekstfelt"
            margin="normal"
            defaultValue={ssn}
            name="ssn"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Bank number"
            className="tekstfelt"
            margin="normal"
            defaultValue={bankNumber}
            name="bankNumber"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <h2> Card info:</h2>
          <TextField
            required
            id="standard-required"
            label="Type of card"
            className="tekstfelt"
            margin="normal"
            defaultValue={type}
            name="type"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Card number"
            className="tekstfelt"
            margin="normal"
            defaultValue={cardNumber}
            name="cardNumber"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="CVC"
            className="tekstfelt"
            margin="normal"
            defaultValue={cvc}
            name="cvc"
            onChange={e => this.handleEvent(e)}
          />

          <br />
          <TextField
            required
            id="standard-required"
            label="PIN code"
            className="tekstfelt"
            margin="normal"
            defaultValue={pin}
            name="pin"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Expiration date"
            className="tekstfelt"
            margin="normal"
            defaultValue={expirationDate}
            name="expirationDate"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <Button type="submit" variant="contained" color="primary" className="Knapp">
            Log in
          </Button>
        </form>
        <p>
          name: {this.name}
          <br />
          balance: {this.balance}
          <br />
          address: {this.address}
          <br />
          ssn: {this.ssn}
          <br />
          bankNumber: {this.cardNumber}
          <br />
          <h2>Card information</h2>
          type: {this.type}
          <br />
          cardNumber: {this.cardNumber}
          <br />
          cvc: {this.cvc}
          <br />
          expirationDate:
          {this.expirationDate}
          <br />
          pin: {this.expirationDate}
          <br />
        </p>
      </React.Fragment>
    );
  }
}
export default newuser;
