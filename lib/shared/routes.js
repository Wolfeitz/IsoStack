'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _pagesAppHandler = require('./pages/AppHandler');

var _pagesAppHandler2 = _interopRequireDefault(_pagesAppHandler);

var _pagesLogin = require('./pages/Login');

var _pagesLogin2 = _interopRequireDefault(_pagesLogin);

var _pagesContactUs = require('./pages/ContactUs');

var _pagesContactUs2 = _interopRequireDefault(_pagesContactUs);

var _pagesNSNDetail = require('./pages/NSNDetail');

var _pagesNSNDetail2 = _interopRequireDefault(_pagesNSNDetail);

var _pagesNSN = require('./pages/NSN');

var _pagesNSN2 = _interopRequireDefault(_pagesNSN);

//import TableHandler from './pages/Tablex';
// <Route name="Table" path="/Table" handler={TableHandler}/>

var Routes = _react2['default'].createElement(
	_reactRouter.Route,
	{ name: 'app', handler: _pagesAppHandler2['default'], path: '/' },
	_react2['default'].createElement(_reactRouter.Route, { name: 'favicon', path: '/favicon.ico' }),
	',',
	_react2['default'].createElement(_reactRouter.Route, { name: 'login', path: '/login', handler: _pagesLogin2['default'] }),
	',',
	_react2['default'].createElement(_reactRouter.Route, { name: 'contactus', path: '/contactus', handler: _pagesContactUs2['default'] }),
	',',
	_react2['default'].createElement(_reactRouter.Route, { name: 'nsn', path: '/NSN', handler: _pagesNSN2['default'] }),
	',',
	_react2['default'].createElement(_reactRouter.Route, { name: 'nsnDetail', path: '/NSNDetail/:nsn', handler: _pagesNSNDetail2['default'] })
);

exports['default'] = Routes;
module.exports = exports['default'];