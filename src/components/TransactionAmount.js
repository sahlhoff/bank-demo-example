import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import styles from '../styles/styles';

export default class TransactionAmount extends Component {

  render(){
    const amount = Number(this.props.amount) * -1;
    const amountStyle = (amount > 0 ? styles.positiveTransactions : styles.negativeTransactions );
    
    return (
      <div style={amountStyle}>
        <FormattedNumber value={amount} currency='USD' style='currency' />
      </div>
    );
  }
  
}


