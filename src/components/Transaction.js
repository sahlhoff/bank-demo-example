import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import mccData from '../constants/mcc-data';
import styles from '../styles/styles';
import { FormattedNumber } from 'react-intl';

import moment from 'moment';

export default class Transaction extends Component {
  
  render() {
    let transaction = this.props.transaction;

    return (
      <li style={styles.finalTransactionFeedItem}>
        <div>
          {this._getIcon(transaction)}
        </div>
        <div style={styles.finalTransactionMeta}>
          <div style={styles.finalTransactionTitle}>
            {transaction.pending ? 'Pending': ''}{transaction.name}
          </div>
          <div style={styles.finalTransactionDate}>
            {this._getTransactionTime(transaction.created_at)}
          </div>
        </div>
        <div>
          {this._getTransactionAmount(transaction.amount)}
        </div>
      </li>
    );
  }

  _getTransactionTime(time){
    return moment(time).fromNow();
  }

  _getIcon(transaction){
    let icon, iconStyle, iconColor;
    let amount = Number(transaction.amount);
    
    let positiveColor = 'rgb(146, 177, 129)';
    let negativeColor = 'rgb(214, 113, 113)';

    iconColor = {backgroundColor: (amount > 0 ? negativeColor : positiveColor)};
    
    if(amount < 0){
      icon = 'bank';
    } else if (transaction.activity_meta) {
      let mcc = transaction.activity_meta.mcc;
      
      let description = mccData.find((category) => {
        return category.mcc == mcc;
      });

      if(description && description.irs_description){
        icon = this._getDescriptionIcon(description.irs_description);
      } else {
        icon = 'credit-card';
      }
    } else {
      icon = 'credit-card';
    }

    iconStyle = {...styles.finalTransactionIcon, ...iconColor};

    return <FontAwesome name={icon} style={iconStyle} />;
  }


  _getDescriptionIcon(description){
    description = description.toLowerCase();

    if(description.includes('market') || description.includes('store') || description.includes('shop')){
      return 'shopping-cart';
    } else if(description.includes('restaurant') || description.includes('bakeries')){
      return 'cutlery';
    } else if(description.includes('beer') || description.includes('drinking')){
      return 'glass';
    } else if (description.includes('airline')){
      return 'plane';
    } else if (description.includes('taxicabs') || description.includes('transport')) {
      return 'taxi';
    } else if (description.includes('railways')) {
      return 'train';
    } else if (description.includes('hotel')){
      return 'hotel';
    } else if (description.includes('theaters')) {
      return 'film';
    } else if (description.includes('service')) {
      return 'briefcase';
    } else {
      //console.log(description);      
      return 'credit-card';
    }

  }

  _getTransactionAmount(amount){
    amount = Number(amount) * -1;
    let amountColor = (amount > 0 ? styles.positiveTransactions : styles.negativeTransactions );
    let amountStyle = {...styles.finalTransactionAmount, ...amountColor};
    
    return (
      <div style={amountStyle}>
        <FormattedNumber value={amount} currency='USD' style='currency' />
      </div>
    );

  }

}

