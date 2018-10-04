import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

class logIn extends React.Component {
  constructor() {
    super();
    this.state = {
      cardnumber: "",
      pin: "",
      date: new Date().toLocaleString()
    };
    this.handleEvent = this.handleEvent.bind(this);
    {
      /* check if can be removed */
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent = e => {
    this.setState({ [e.target.cardnumber]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { cardnumber, pin, date } = this.state;

    axios.post("/api/formdata", { cardnumber, pin, date }).then(result => {
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
            defaultvalue={cardnumber}
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
            type="password"
            defaultvalue={pin}
            name="whitdrawal"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="Knapp"
          >
            Log in
          </Button>
        </form>
        <p>
          Cardnumber: {this.state.cardnumber} <br />
          pin-code: {this.state.pin} <br />
          date: {this.state.date}
        </p>
      </React.Fragment>
    );
  }
}
export default logIn;
