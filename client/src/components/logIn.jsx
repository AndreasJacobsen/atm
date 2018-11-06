import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { Route, Redirect } from 'react-router';

class logIn extends React.Component {
  constructor() {
    super();
    this.state = {
      cardnumber: '',
      pin: '',
      servercardnumber: {
        message: '',
        status: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    // get our form data out of state
    const { cardnumber, pin } = this.state;
    const data = { cardnumber, pin };
    const url = '/api/login';
    const serverResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(data)
    });
    const json = await serverResponse.json();
    console.log(json);

    this.setState(
      prevState => {
        sessionStorage.setItem('cardnumber', json.message);
        return {
          servercardnumber: json.message,
          status: json.status
        };
      },
      () => {
        console.log(this.state.cardnumber);
      }
    );
  };

  render() {
    const { cardnumber, pin, status } = this.state;
    return (
      <React.Fragment>
        {status ? <Redirect to="/selectaction" /> : null}
        {console.log('server says:')}
        {console.log(status)}
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
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 12);
            }}
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
            defaultValue={pin}
            name="pin"
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 4);
            }}
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary" className="test">
            <div className="test">Log in</div>
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
