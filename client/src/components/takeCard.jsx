import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom';

class takeCard extends React.Component {
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
        <h1>Please take your card</h1>
        <h2>See you again!</h2>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}

          <Button type="submit" variant="contained" color="primary" className="Knapp">
            <Link to="/" className="test">
              Confirm
            </Link>
          </Button>
          <br />
        </form>
      </React.Fragment>
    );
  }
}
export default takeCard;
