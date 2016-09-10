import React, {PropTypes, Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Transactions from './components/Transactions';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ExpandedTransaction from './components/ExpandedTransaction';
import { IntlProvider } from 'react-intl';


import transactionData from './constants/transaction-data';
import activityData from './constants/activity-data';

activityData.sort((a, b) => {
  return new Date(b.created_at) - new Date(a.created_at);
});

export default class App extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    
    return (
      <IntlProvider locale="en">
        <Router history={history}>
          <Route path='/' activities={activityData} component={Dashboard}>
            <IndexRoute component={Home} activities={activityData}/>
            <Route path='transactions' activities={activityData} component={Transactions}/>
            <Route path='transaction/:transactionId' component={ExpandedTransaction}/>
          </Route>
        </Router>
      </IntlProvider>
    );
  }
}
