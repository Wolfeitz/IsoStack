'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Add2Cart = _react2['default'].createClass({
	displayName: 'Add2Cart',

	getInitialState: function getInitialState() {
		return { value: 'Hello!' };
	},
	handleChange: function handleChange(event) {
		var maxSize = 5;
		if (isNaN(this.props.maxSize)) {
			if (parseInt(this.props.maxSize) > 0) {
				maxSize = parseInt(this.props.maxSize);
			}
		}
		this.setState({ value: event.target.value.substr(0, maxSize) });
	},
	alertValue: function alertValue() {
		alert(this.state.value);
	},
	reset: function reset() {
		this.setState({
			value: 'Hello!'
		});
	},
	render: function render() {
		var value = this.state.value;
		var divStyle = {
			border: '1px solid black'
		};
		return _react2['default'].createElement(
			'div',
			{ style: divStyle },
			'Add to Cart',
			_react2['default'].createElement('br', null),
			_react2['default'].createElement('input', { type: 'text', value: value, onChange: this.handleChange }),
			_react2['default'].createElement(
				'button',
				{ onClick: this.alertValue },
				'Alert Value'
			)
		);
	}
});

exports['default'] = Add2Cart;
module.exports = exports['default'];