import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
// import Debits from './Debits.js';
// import Credits from './Credits.js';

class Home extends Component {
  render() {
    return (
        <div>
            <p>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>
          <Link to="/userProfile">User Profile</Link>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <Link to='/debits'>Debit Numbers</Link>
          <br></br>
            <Link to='/credits'>Credit Numbers</Link>
          </p>
        </div>
    );
  }
}

export default Home;