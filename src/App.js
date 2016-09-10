import React, {PropTypes, Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Transactions from './components/Transactions';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import { IntlProvider } from 'react-intl';


import transactionData from './constants/transaction-data';
import activityData from './constants/activity-data';

export default class App extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    
    return (
      <IntlProvider locale="en">
        <Router history={history}>
          <Route path='/' transactions={transactionData} activities={activityData} component={Dashboard}>
            <IndexRoute transactions={transactionData} activities={activityData} component={Transactions}/>
            <Route path='home' component='home' />
          </Route>
        </Router>
      </IntlProvider>
    );
  }
}
