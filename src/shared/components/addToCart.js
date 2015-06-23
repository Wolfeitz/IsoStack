import React from 'react'

let Add2Cart = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
  	let maxSize = 5
  	if (isNaN(this.props.maxSize))
  	{
  		if (parseInt(this.props.maxSize) > 0)
  		{
			maxSize = parseInt(this.props.maxSize)
  		}
  	}
    this.setState({value: event.target.value.substr(0, maxSize)});
  },
	alertValue: function() {
		alert(this.state.value);
		},
		reset: function() {
	    this.setState({
	      value: "Hello!"
	    });
	},
	render: function() {
	let value = this.state.value;
	let divStyle = {
	  border: '1px solid black'
	};
	return (
		<div style={divStyle}>
			Add to Cart<br />
	    	<input type="text" value={value} onChange={this.handleChange} />
	    	<button onClick={this.alertValue}>Alert Value</button>
		</div>
	);
  }
});

export default Add2Cart;
