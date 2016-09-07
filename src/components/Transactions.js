import React, { Component } from 'react';


export default class Transactions extends Component {
  
  render(){
    const transactions = this.props.route.transactions;

    if(transactions.length > 0){
      return (
        <div className="feed-container">
          {this._renderTransactions(transactions)}
        </div>
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
      <p>transactions component</p>
    );
  }

  _renderTransactions(transactions){
    return (
      <div>
        <ul>
          {transactions.map((transaction, index) => {
            return <li>{transaction.name}</li>
          })}
        </ul>
      </div>
    )

  }

}
