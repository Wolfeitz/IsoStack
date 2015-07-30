'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsTutorial = require('../components/tutorial');

var _componentsTutorial2 = _interopRequireDefault(_componentsTutorial);

var _componentsDetailPageTitleBox = require('../components/detailPageTitleBox');

var _componentsDetailPageTitleBox2 = _interopRequireDefault(_componentsDetailPageTitleBox);

var _componentsNavBar = require('../components/navBar');

var _componentsNavBar2 = _interopRequireDefault(_componentsNavBar);

var Login = _react2['default'].createClass({
  displayName: 'Login',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_componentsDetailPageTitleBox2['default'], { name: "Rob", nsn: "121212-3434343", description: "OH MY Gosh Golly!" }),
      'Welcome to login',
      _react2['default'].createElement(_componentsTutorial2['default'], { name: "Rob" }),
      _react2['default'].createElement(_componentsNavBar2['default'], null),
      _react2['default'].createElement(_reactRouter.RouteHandler, null)
    );
  }
});

exports['default'] = Login;
module.exports = exports['default'];