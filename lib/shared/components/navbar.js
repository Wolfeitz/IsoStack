'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var NavBar = _react2['default'].createClass({
  displayName: 'NavBar',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: "nav" },
      _react2['default'].createElement(
        'ul',
        null,
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: "app" },
            'Home'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: "login" },
            'Login'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: "contactus" },
            'Contact Us'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: "nsn" },
            'NSN'
          )
        )
      )
    );
  }
});

exports['default'] = NavBar;
module.exports = exports['default'];
/* this is the importTant part */