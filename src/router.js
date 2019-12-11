import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import UserPage from './routes/UserPage'
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/user" exact component={UserPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
