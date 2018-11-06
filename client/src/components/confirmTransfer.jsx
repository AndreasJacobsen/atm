import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import { Link } from 'react-router-dom';

class confirmTransfer extends React.Component {
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

    axios.post('/api/transfere', {}).then(result => {});
  };

  render() {
    return (
      <React.Fragment>
        <div>
          Select action -> Transfer -> <b>Confirm -></b> Finished? -> Take card
        </div>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <h1>Please confirm trasnfer ammount and reciver account</h1>
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <div className="container">
            <Button type="submit" variant="contained" color="primary" className="floatRight">
              <Link to="/finish" className="test">
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
export default confirmTransfer;
