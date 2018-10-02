import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

class MoneyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      whitdrawal: "",
      reason: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { name, whitdrawal, reason } = this.state;
    return (
      <React.Fragment>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} action="/api/balance" method="POST">
          <label>
            Withdraw money:
            <input
              type="number"
              value={whitdrawal}
              onChange={this.handleChange}
            />
          </label>
          <br /> {/* Bytt ut med CSS block elementer eller noe slikt */}
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Skriv navn"
            className="tekstfelt"
            margin="normal"
            value={name}
            onChange={this.handleChange}
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
        <p>You wrote: {this.state.value}</p>
      </React.Fragment>
    );
  }
}
export default MoneyForm;
