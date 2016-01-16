import React from 'react';
import history from 'history';
import { IndexRoute, Route } from 'react-router';

const routes = () => {
  return (
      <Route path="/">
        <IndexRoute component={require('./handlers/Root')}/>
        <Route path="page1" component={require('./handlers/Page1')}/>
        <Route path="page2" component={require('./handlers/Page2')}/>
      </Route>
  );
};

export default routes;
