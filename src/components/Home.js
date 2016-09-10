import React, { Component } from 'react';
import Transaction from './Transaction';
import { Link } from 'react-router';
import styles from '../styles/styles';

export default class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentBalance: '-$1,241.90',
      currentCredit: '$1,800.89'
    };
  }

  render(){
    return (
      <div style={styles.finalHomeContainer}>
        <div style={styles.finalHomeAccountContainer}>
          <div>
            <div style={styles.finalHomeAccountBalance}>
              {this.state.currentBalance}
            </div>
            <div style={styles.finalHomeAccountSubTitle}>
              Current Balance
            </div>
          </div>
          <div>
            <div style={styles.finalHomeAccountCredit}>
              {this.state.currentCredit}
            </div>
            <div style={styles.finalHomeAccountSubTitle}>
              Available Credit
            </div>
          </div>
        </div>
        <div>
          <div style={styles.finalPageCTA}>
            Recent Activity
          </div>
          {this._renderRecentTransactions()}
          <div style={styles.finalPageCTA}>
            <Link to={'/transactions'}>View More</Link>
          </div>
        </div>
      </div>
    );
  }

  _renderRecentTransactions(){
    const recentTransactions = this.props.route.activities.slice(0, 5);

    return (
      <ul style={styles.finalTransactionFeed}>
        {recentTransactions.map((transaction, i) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    );
  }
    
}
