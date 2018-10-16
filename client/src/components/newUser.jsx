import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
      selectedOption: '',
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
  handleChange = e => {
    this.setState({ [e.target.type]: e.target.value });
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
      .post('/api/newUser', {
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
            type="text"
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
            type="number"
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
            type="text"
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
            type="number"
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
            type="number"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <h2> Card info:</h2>
          <Select value={this.state.type} onChange={e => this.handleChange(e)}>
            <MenuItem value="visa">Visa</MenuItem>
            <MenuItem value="mastercard">Mastercard</MenuItem>
          </Select>
          <br />
          <TextField
            required
            id="standard-required"
            label="Card number"
            className="tekstfelt"
            margin="normal"
            defaultValue={cardNumber}
            name="cardNumber"
            type="number"
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
            defaultValue="2017-05-24"
            type="date"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <Button type="submit" variant="contained" color="primary" className="Knapp">
            Register new user
          </Button>
        </form>
        <p>
          name: {this.state.name}
          <br />
          balance: {this.state.balance}
          <br />
          address: {this.state.address}
          <br />
          ssn: {this.state.ssn}
          <br />
          bankNumber: {this.state.bankNumber}
          <br />
          <h2>Card information</h2>
          type: {this.state.type.selectedOption}
          <br />
          cardNumber: {this.state.cardNumber}
          <br />
          cvc: {this.state.cvc}
          <br />
          expirationDate:
          {this.state.expirationDate}
          <br />
          pin: {this.state.pin}
          <br />
        </p>
      </React.Fragment>
    );
  }
}
export default newuser;
