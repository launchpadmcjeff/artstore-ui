import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';
import Cart from './Cart';
import Orders from './Orders';
import Payment from './Payment';
import Shipping from './Shipping';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/shipping">
          <Shipping />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root