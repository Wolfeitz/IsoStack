import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import CommentBox from '../components/tutorial';
import NSNDetail from '../components/detailPageTitleBox';
import NavBar from '../components/navBar';

let Login = React.createClass({ 

  render() {
    return(<div>
	    	<NSNDetail name="Rob" nsn="121212-3434343" description="OH MY Gosh Golly!" />
			Welcome to login
	    	<CommentBox name="Rob" />
	    	<NavBar />
	    	<RouteHandler />
    	</div>
    	);
  }
});

export default Login;