import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let NavBar = React.createClass({  
  render() {
    return (
      <div className="nav">
      <ul>
        <li><Link to="app">Home</Link></li>
        <li><Link to="login">Login</Link></li>
        <li><Link to="contactus">Contact Us</Link></li>
        <li><Link to="nsn">NSN</Link></li>
      </ul>
        {/* this is the importTant part */}
        
      </div>
    );
  }
});

export default NavBar;