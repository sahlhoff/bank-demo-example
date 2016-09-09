import React, { Component } from 'react';
import styles from '../styles/styles';

import moment from 'moment';

export default class Transaction extends Component {
  
  render() {
    let transaction = this.props.transaction;

    return (
      <li style={styles.finalTransactionFeedItem}>
        <div>
          icon
        </div>
        <div>
          {transaction.pending ? 'Pending': ''}{transaction.name}
          <br/>
          {this._getTransactionTime(transaction.created_at)}
        </div>
        <div>
          <b>${transaction.amount}</b>
        </div>
      </li>
    );
  }

  _getTransactionTime(time){
    return moment(time).fromNow();
  }


}

