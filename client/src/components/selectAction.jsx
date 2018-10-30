import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom';

class selectAction extends React.Component {
  constructor() {
    super();
    this.state = {
      cardnumber: '',
      pin: ''
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
    const { cardnumber, pin } = this.state;

    axios.post('/api/login', { cardnumber, pin }).then(result => {
      console.log(this.cardnumber);
      console.log(cardnumber);
    });
  };

  render() {
    const { cardnumber, pin } = this.state;
    return (
      <React.Fragment>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <h1> Choose an action</h1>
        <br />
        {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
        <Button variant="contained" color="primary" className="Knapp">
          <Link to="/withdrawl">Withdrawl money</Link>
        </Button>
        <br />
        <br />
        <Button variant="contained" color="primary" className="Knapp">
          <Link to="/moneyform">Transfer money</Link>
        </Button>
        <br />
        <br />
        <Button variant="contained" color="secondary" className="Knapp">
          Log out
        </Button>
      </React.Fragment>
    );
  }
}
export default selectAction;
