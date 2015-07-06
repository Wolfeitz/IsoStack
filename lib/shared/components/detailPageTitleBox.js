'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addToCart = require('./addToCart');

var _addToCart2 = _interopRequireDefault(_addToCart);

var Nsn = _react2['default'].createClass({
    displayName: 'Nsn',

    render: function render() {
        return _react2['default'].createElement(
            'h1',
            null,
            'NSN ',
            this.props.nsn
        );
    }
});

var Name = _react2['default'].createClass({
    displayName: 'Name',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'h2',
                null,
                this.props.name
            )
        );
    }
});

var Description = _react2['default'].createClass({
    displayName: 'Description',

    render: function render() {
        return _react2['default'].createElement(
            'strong',
            null,
            this.props.description
        );
    }
});

var titleBox = _react2['default'].createClass({
    displayName: 'titleBox',

    render: function render() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(Nsn, { nsn: this.props.nsn }),
            _react2['default'].createElement(Name, { name: this.props.name }),
            _react2['default'].createElement(Description, { description: this.props.description }),
            _react2['default'].createElement(_addToCart2['default'], null)
        );
    }
});

exports['default'] = titleBox;
module.exports = exports['default'];