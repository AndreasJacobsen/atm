import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';


class MoneyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          atmUser: {
              name: '',
              balance: '',
              reason: '', 
          }
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
       event.preventDefault();
    }
  
    render() {
      return (
        <React.Fragment>
        <CssBaseline /> { /*https://material-ui.com/style/css-baseline */ }
        <form onSubmit={this.handleSubmit}>
          <label>
           Withdraw money:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label><br></br>
          <Button type="submit" variant="contained" color="primary" className="Knapp">
            Penger
          </Button>
        </form>
        <p>You wrote: {this.state.value}</p>
        </React.Fragment>

      );
    }
  }
  export default MoneyForm; 