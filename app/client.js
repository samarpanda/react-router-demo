import React from 'react';
import ReactDOM from 'react-dom';
import Page from './handlers/Root';
import { Router, Route } from 'react-router';
import history from './history';

import rconfig from './routes.js';
console.log("YO");
ReactDOM.render(<Router history={history} routes={rconfig()}/>, document.getElementById('app'));
