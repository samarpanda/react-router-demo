import React from 'react';
import history from 'history';
import { Router, Route, Link, browserHistory } from 'react-router';

const routes = () => {
  return (
      <Router>
        <Route path="/" component={require('./handlers/Root')}/>
        <Route path="page1" component={require('./handlers/Page1')}/>
        <Route path="page2" component={require('./handlers/Page2')}/>
      </Router>
  );
};

export default routes;
