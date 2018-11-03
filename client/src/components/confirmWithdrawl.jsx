import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import { Link } from 'react-router-dom';

class confirmWithdrawl extends React.Component {
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

    axios.post('/api/formdata', {}).then(result => {});
  };

  render() {
    return (
      <React.Fragment>
        <h1>Please confirm the withdrawl</h1>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <div className="container">
            <Button type="submit" variant="contained" color="primary" className="floatRight">
              <Link to="/takecash" className="test">
                Confirm
              </Link>
            </Button>
            <Button type="submit" variant="contained" color="secondary" className="floatLeft">
              <Link to="/selectaction" className="test">
                Cancel
              </Link>
            </Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default confirmWithdrawl;
