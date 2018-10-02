import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

class MoneyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      whitdrawal: "",
      reason: ""
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

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { name, whitdrawal, reason } = this.state;
    return (
      <React.Fragment>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} action="/api/balance" method="POST">
          <br />{" "}
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <TextField
            required
            id="standard-required"
            label="Navn"
            defaultValue="Full name"
            className="tekstfelt"
            margin="normal"
            value={name}
            name="name"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Witdhdrawal amount"
            defaultValue=""
            className="tekstfelt"
            margin="normal"
            value={whitdrawal}
            name="whitdrawal"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Reason"
            defaultValue=""
            className="tekstfelt"
            margin="normal"
            value={reason}
            name="reason"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="Knapp"
          >
            Penger
          </Button>
        </form>
        <p>You wrote: </p>
      </React.Fragment>
    );
  }
}
export default MoneyForm;
