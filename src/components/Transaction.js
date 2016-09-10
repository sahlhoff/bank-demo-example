import React, { Component } from 'react';
import TransactionAmount from './TransactionAmount';
import TransactionIcon from './TransactionIcon';
import styles from '../styles/styles';
import { browserHistory } from 'react-router';
import moment from 'moment';

export default class Transaction extends Component {
  
  render() {
    let transaction = this.props.transaction;

    return (
      <li style={styles.finalTransactionFeedItem} onClick={() => this._expandTransaction(transaction)}>
        <div>
          <TransactionIcon transaction={transaction} />
        </div>
        <div style={styles.finalTransactionMeta}>
          <div style={styles.finalTransactionTitle}>
            {transaction.pending ? 'Pending': ''}{transaction.name}
          </div>
          <div style={styles.finalTransactionDate}>
            {this._getTransactionTime(transaction.created_at)}
          </div>
        </div>
        <div style={styles.finalTransactionAmount}>
          <TransactionAmount amount={transaction.amount} />
        </div>
      </li>
    );
  }

  _getTransactionTime(time){
    return moment(time).fromNow();
  }


  _expandTransaction(transaction){
    browserHistory.push('/transaction/' + transaction.id);
  }

}

