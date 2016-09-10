import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from '../styles/styles';

export default class Navbar extends Component {

  render(){
    return (
      <div style={styles.bankNav}>
        <h2><Link to={'/'} style={styles.link} >Home</Link> | <Link to={'/transactions'} style={styles.link}>Transactions</Link></h2>
      </div>
    );
  }
  
}


