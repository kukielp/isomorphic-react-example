import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './app';
import Home from './home';
import About from './about';

var Routes = (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='about' component={About} />

  		<Redirect from="RedirectFrom" to="RedirectTo" />
	</Route>
);

export default Routes;