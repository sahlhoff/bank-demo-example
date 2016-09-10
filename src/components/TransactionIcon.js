import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import styles from '../styles/styles';
import FontAwesome from 'react-fontawesome';
import mccData from '../constants/mcc-data';

export default class TransactionIcon extends Component {

  render(){
    const transaction = this.props.transaction;
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

    iconStyle = {...styles.bankTransactionIcon, ...iconColor};

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
  
}


