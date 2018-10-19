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
      type: '',
      selectedOption: '',
      cardNumber: '',
      cvc: '',
      expirationDate: '',
      pin: ''
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange = e => {
    this.setState({ type: e.target.value });
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
        <CssBaseline />
        <h1> New user</h1>
        <form onSubmit={this.handleSubmit} method="POST">
          <br />
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
            label="Balance in NOK"
            className="tekstfelt"
            margin="normal"
            defaultValue={balance}
            name="balance"
            type="number"
            onChange={e => this.handleEvent(e)}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
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
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 11);
            }}
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
          <Select value={this.state.type} onChange={this.handleChange}>
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
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 16);
            }}
            type="number"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="CVC"
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 3);
            }}
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
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 4);
            }}
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
          <h2>User information</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>Balance</th>
              <th>Address</th>
              <th>SSN</th>
              <th>Bank number</th>
            </tr>
            <tr>
              <td>{this.state.name}</td>
              <td>{this.state.balance}</td>
              <td>{this.state.address}</td>
              <td>{this.state.ssn}</td>
              <td>{this.state.bankNumber}</td>
            </tr>
          </table>
          <h2>Card information</h2>
          <table>
            <tr>
              <th>Card type</th>
              <th>Card number</th>
              <th>CVC</th>
              <th>Expiration date</th>
              <th>Pin</th>
            </tr>
            <tr>
              <td>{this.state.type}</td>
              <td>{this.state.cardNumber}</td>
              <td>{this.state.cvc}</td>
              <td>{this.state.expirationDate}</td>
              <td>{this.state.pin}</td>
            </tr>
          </table>
        </p>
      </React.Fragment>
    );
  }
}
export default newuser;
