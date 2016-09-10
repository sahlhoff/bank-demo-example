import React, { Component } from 'react';
import Navbar from './Navbar';
import styles from '../styles/styles';

export default class Dashboard extends Component {

  render(){
    return (
      <div style={styles.bankBody}>
        <Navbar />
        <div style={styles.bankContainer}>
          {this.props.children}
        </div>
      </div>
    );

  }
  
}
