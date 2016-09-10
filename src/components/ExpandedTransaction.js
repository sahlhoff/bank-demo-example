import React, { Component } from 'react';
import Transaction from './Transaction';
import { Link } from 'react-router';
import styles from '../styles/styles';
import activities from '../constants/activity-data';
import moment from 'moment';
import TransactionAmount from './TransactionAmount';
import TransactionIcon from './TransactionIcon';

export default class ExpandedTransaction extends Component {

  constructor(props){
    super(props);

    const transactionId = this.props.params.transactionId;

    this.state = {
      transaction: this._getTransaction(transactionId)
    };

  }

  render(){
    return (
      <div style={styles.finalExpandedTransactionContainer}>
        <div style={styles}>
          <TransactionIcon transaction={this.state.transaction} />
        </div>
        <div style={styles.finalExpandedTransactionDate}>
          {this._getTransactionTime(this.state.transaction.created_at)}
        </div>
        <div style={styles.finalExpandedTransactionAmount}>
          <TransactionAmount amount={this.state.transaction.amount} />
        </div>
        <div style={styles.finalExpandedTransactionTitle}>
          {this.state.transaction.name}
        </div>
        <div onClick={() => {alert('Oops, this is not implemented ;(')}}>
          Add a note!
        </div>
      </div>
    );
  }

  _getTransaction(transId){
    return activities.find((activity) => {
      return activity.id == transId;
    });
  }

  _getTransactionTime(time){
    return moment(time).format('LL');
  }

  _getTransactionIcon(){
    
  }
    
}
