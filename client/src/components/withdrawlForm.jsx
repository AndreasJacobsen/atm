import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class WithdrawalForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      whitdrawal: '',
      reason: ''
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
    const { name, whitdrawal, reason } = this.state;

    axios.post('/api/formdata', { name, whitdrawal, reason }).then(result => {
      console.log(this.name);
      console.log(result.name);
    });
  };

  render() {
    const { name, whitdrawal, reason } = this.state;
    return (
      <React.Fragment>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <h1>How much do you want to withdraw?</h1>
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <br />

          <Button variant="contained" color="primary" className="Knapp">
            200 NOK
          </Button>
          <Button variant="contained" color="primary" className="Knapp">
            300 NOK
          </Button>
          <br />
          <br />
          <Button variant="contained" color="primary" className="Knapp">
            400 NOK
          </Button>
          <Button variant="contained" color="primary" className="Knapp">
            500 NOK
          </Button>
          <br />
          <br />
          <Button variant="contained" color="primary" className="Knapp">
            700 NOK
          </Button>
          <Button variant="contained" color="primary" className="Knapp">
            1000 NOK
          </Button>

          <br />
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

          <Button variant="contained" color="secondary" className="Knapp">
            Other amount
          </Button>

          <br />
          <br />
        </form>
      </React.Fragment>
    );
  }
}
export default WithdrawalForm;
