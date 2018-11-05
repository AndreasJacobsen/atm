import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import { Link } from 'react-router-dom';
class WithdrawalForm extends React.Component {
  constructor() {
    super();
    this.state = {
      ammount: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClick = () => {
    this.setState({
      ammount: this.state.ammount
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { ammount } = this.state;

    axios.post('/api/formdata', { ammount }).then(result => {
      console.log(this.ammount);
      console.log(result.ammount);
    });
  };

  render() {
    const { ammount } = this.state;
    return (
      <React.Fragment>
        <div>
          Select action ->
          <b>Withdraw -></b> Confirm -> Take cash -> Finished? -> Take card{' '}
        </div>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <h1>How much do you want to withdraw?</h1>
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller wwnoe slikt, bytt name på form fields til å hentes via JS  */}
          <br />
          <div className="container">
            <Button
              type="submit"
              variant="contained"
              onClick={this.onClick}
              value="200"
              color="primary"
              className="floatLeft"
              defaultValue={ammount}
              name="ammount"
            >
              <div className="test">200 NOK</div>
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={this.onClick}
              value="300"
              color="primary"
              className="floatRight"
              defaultValue={ammount}
              name="ammount"
            >
              <div className="test">300 NOK</div>
            </Button>
            <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              onClick={this.onClick}
              value="400"
              color="primary"
              className="floatLeft"
              defaultValue={ammount}
              name="ammount"
            >
              <div className="test">400 NOK</div>
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={this.onClick}
              value="500"
              color="primary"
              className="floatRight"
              defaultValue={ammount}
              name="ammount"
            >
              <div className="test">500 NOK</div>
            </Button>
            <br />
            <br />
            <Button
              type="submit"
              variant="contained"
              onClick={this.onClick}
              value="700"
              color="primary"
              className="floatLeft"
              defaultValue={ammount}
              name="ammount"
            >
              <div className="test"> 700 NOK</div>
            </Button>
            <Button
              type="submit"
              variant="contained"
              onClick={this.onClick}
              value="1000"
              color="primary"
              className="floatRight"
              defaultValue={ammount}
              name="amount"
            >
              <div className="test">1000 NOK</div>
            </Button>
          </div>

          <br />
          <br />
          <div className="marginTop">
            <Button variant="contained" color="secondary" className="Knapp">
              <Link to="/otheramount" className="test">
                Other amount
              </Link>
            </Button>
          </div>
          <br />
          <br />
        </form>
      </React.Fragment>
    );
  }
}
export default WithdrawalForm;
