import React from 'react';
import ReactDOM from 'react-dom';
import Page from './handlers/Root';
import { Router, Route, Link, browserHistory } from 'react-router';

import rconfig from './routes.js';
ReactDOM.render(<Router history={browserHistory} routes={rconfig()}/>, document.getElementById('app'));
