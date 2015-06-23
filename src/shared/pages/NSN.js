import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';


let NSNList = React.createClass({ 
	contextTypes: {
    	router: React.PropTypes.func
  	},
  	render: function () {
  		//let { router } = this.context;
  		//let Nsn = router.getCurrentParams().nsn;
    	return(<div>
    		<ul>
        <li><Link to="nsnDetail" params={{nsn: "1234-12-123-12345"}}>1234-12-123-12345</Link></li>
        <li><Link to="nsnDetail" params={{nsn: "1234-12-123-12346"}}>1234-12-123-12346</Link></li>
        <li><Link to="nsnDetail" params={{nsn: "1234-12-123-12347"}}>1234-12-123-12347</Link></li>
        <li><Link to="nsnDetail" params={{nsn: "1234-12-123-12348"}}>1234-12-123-12348</Link></li>
        </ul>
			</div>
    	);
  }
});


export default NSNList;