import React from 'react';
import NsnTitle from '../components/detailPageTitleBox';

let NSN = React.createClass({ 
	contextTypes: {
    	router: React.PropTypes.func
  	},
  	render: function () {
  		let { router } = this.context;
  		let Nsn = router.getCurrentParams().nsn;
    	return(<div>
    		<NsnTitle name="Rob" nsn={Nsn} description="OH MY Gosh Golly!" />
			</div>
    	);
  }
});


export default NSN;