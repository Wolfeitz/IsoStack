'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsNavBar = require('../components/navBar');

var _componentsNavBar2 = _interopRequireDefault(_componentsNavBar);

var PgInfo = _react2['default'].createClass({
  displayName: 'PgInfo',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      'Welcome to ISO Parts!',
      _react2['default'].createElement(_componentsNavBar2['default'], null),
      _react2['default'].createElement(_reactRouter.RouteHandler, null)
    );
  }
});

exports['default'] = PgInfo;
module.exports = exports['default'];