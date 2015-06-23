import React from 'react';
import AddToCart from './addToCart';

let Nsn = React.createClass({
    render: function() {
        return (
        	<h1>NSN {this.props.nsn}</h1>
        );
    }
});

let Name = React.createClass({
    render: function() {
        return (
        	<div>
        	<h2>{this.props.name}</h2>
        	</div>
        );
    }
});

let Description = React.createClass({
    render: function() {
        return (
        	<strong>{this.props.description}</strong>
        );
    }
});

let titleBox = React.createClass({
    render: function() {
        return (
        	<div>
        		<Nsn nsn={this.props.nsn} />
        		<Name name={this.props.name} />
        		<Description description={this.props.description} />

                <AddToCart />
            </div>
        );
    }
});

export default titleBox;