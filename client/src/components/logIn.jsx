import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class logIn extends React.Component {
  constructor() {
    super();
    this.state = {
      cardnumber: '',
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
    const { cardnumber, pin } = this.state;

    axios.post('/api/login', { cardnumber, pin }).then(result => {
      console.log(this.cardnumber);
      console.log(cardnumber);
    });
  };

  render() {
    const { cardnumber, pin } = this.state;
    return (
      <React.Fragment>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <h1> Log in</h1>
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <TextField
            required
            id="standard-required"
            label="Card number"
            className="tekstfelt"
            margin="normal"
            defaultValue={cardnumber}
            name="cardnumber"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="PIN code"
            className="tekstfelt"
            margin="normal"
            type="text"
            defaultValue={pin}
            name="pin"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <Button type="submit" variant="contained" color="primary" className="Knapp">
            Log in
          </Button>
        </form>
        <p>
          Cardnumber: {this.state.cardnumber} <br />
          pin-code: {this.state.pin} <br />
        </p>
      </React.Fragment>
    );
  }
}
export default logIn;
