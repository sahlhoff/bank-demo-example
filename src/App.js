import React, {PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';
import Transactions from './components/Transactions';

export default class App extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    
    return (

      <Router history={history}>
        <Route path='/' component={Transactions}>
        </Route>
      </Router>

    );
  }
}
