import React, { Component } from 'react';
import Transaction from './Transaction';
import styles from '../styles/styles';
import moment from 'moment';

export default class Transactions extends Component {

  constructor(props){
    super(props);

    this.state = {
      transactions: [...this.props.route.activities],
      compareBy: 'created_at'
    };

  }
  
  render(){
    if(this.state.transactions.length > 0){
      return (
        this._renderTransactions(this.state.transactions)
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
      <p>....</p>
    );
  }

  _renderTransactions(transactions){
    return (
      <div style={styles.finalTransactionFeedContainer}>
        <div style={styles.finalTransactionSort}>
          <div onClick={() => this._sort('name')} style={styles.finalTransactionSortItem}>
            TITLE
          </div>
          <div onClick={() => this._sort('created_at')} style={styles.finalTransactionSortItem}>
            DATE
          </div>
          <div onClick={() => this._sort('amount')} style={styles.finalTransactionSortItem}>
            AMOUNT
          </div>
        </div>
        <ul style={styles.finalTransactionFeed}>
          {transactions.map((transaction, i) => {
            return <Transaction transaction={transaction} key={transaction.id} />;
          })}
        </ul>
      </div>
    );
  }

  _sort(compareBy){
    let transactions = this.state.transactions;

    if(this.state.compareBy == compareBy){
      transactions.reverse();
    } else {
      switch(compareBy){
      case 'name':
      case 'amount':
        transactions.sort((a, b) => {
          let x = a[compareBy];
          let y = b[compareBy];

          // check if we need to convert to a number
          if(compareBy == 'amount'){
            x = Number(x);
            y = Number(y);
          }

          if (x > y) {
            return 1;
          } else if (x < y) {
            return -1;
          } else {
            return 0;
          }

        });
        break;
      case 'created_at':
        transactions.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        break;
      }
    }


    this.setState({
      transactions: transactions,
      compareBy: compareBy
    });
  }

}
