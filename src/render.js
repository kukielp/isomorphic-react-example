import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';

var Render = (
	<Router history={browserHistory} routes={Routes} />
);

ReactDOM.render(Render, document.getElementById('app'));
