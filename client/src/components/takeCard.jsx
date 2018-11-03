import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import { Link } from 'react-router-dom';

class takeCard extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    axios.post('/api/formdata', {}).then(result => {});
  };

  render() {
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
