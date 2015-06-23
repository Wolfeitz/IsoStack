import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import NavBar from '../components/navBar';

let PgInfo = React.createClass({ 

  render: function () {
    return(<div>Welcome to ISO Parts!
			<NavBar />
			<RouteHandler />
    	</div>
		);
  }
});

export default PgInfo;