import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import AppHandler from "./pages/AppHandler";
import LoginHandler from './pages/Login';
import ContactHandler from './pages/ContactUs';
import NsnDetailHandler from './pages/NSNDetail';
import NsnListHandler from './pages/NSN';

let Routes = (  
	<Route name="app" handler={ AppHandler } path="/">
		<Route name="favicon" path="/favicon.ico"/>,
		<Route name="login" path="/login" handler={LoginHandler}/>,
		<Route name="contactus" path="/contactus" handler={ContactHandler}/>,
		<Route name="nsn" path="/NSN" handler={NsnListHandler}/>,
		<Route name="nsnDetail" path="/NSNDetail/:nsn" handler={NsnDetailHandler}/>
	</Route>
);

export default Routes;
