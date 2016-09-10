import React, { Component } from 'react';
import Transaction from './Transaction';
import styles from '../styles/styles';
import moment from 'moment';

export default class Transactions extends Component {
  
  render(){
    const transactions = this.props.route.activities;

    if(transactions.length > 0){
      return (
        this._renderTransactions(transactions)
      );
    } else {
      return (
        <div>
          {this._renderNoTransactions()}
        </div>
      );
    }
    
  }

  _renderNoTransactions(){
    return (
      <p>You have no transactions.</p>
    );
  }

  _renderTransactions(transactions){
    return (
      <ul style={styles.finalTransactionFeed}>
        {transactions.map((transaction, i) => {
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
    );
  }

}
