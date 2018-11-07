import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../static/selectAction.css';

class selectAction extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      balance: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const getBalance = async () => {
      try {
        return await axios.post('http://localhost:5000/api/showBalance');
      } catch (error) {
        console.error(error);
      }
    };
    const showBalance = async () => {
      const balance = await getBalance();
      console.log(balance);
      console.log('I am in async!');
    };
    showBalance();
  }
  onClick = () => {
    this.setState({
      loggedIn: false
    });
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
    const { loggedIn } = this.state;
    return (
      <React.Fragment>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <h1> Choose an action</h1>
        <h2>Your balance is: </h2>
        <br />
        <div className="container">
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <Button variant="contained" color="primary" className="floatLeft">
            <Link to="/withdraw" className="test">
              Withdraw money
            </Link>
          </Button>
          <Button variant="contained" color="primary" className="floatRight">
            <Link to="/moneyform" className="test">
              Transfer money
            </Link>
          </Button>
        </div>
        <br />
        <br />
        <div className="marginTop">
          <Button variant="contained" color="secondary" className="">
            <Link to="/" className="test" defaultValue={loggedIn} onClick={this.onClick}>
              Log out
            </Link>
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
export default selectAction;
