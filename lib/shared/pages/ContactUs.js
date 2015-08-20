'use strict';

Object.defineProperty(exports, '__esModule', {
		value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Contact = _react2['default'].createClass({
		displayName: 'Contact',

		render: function render() {
				return _react2['default'].createElement(
						'div',
						null,
						'Welcome to ISO Parts! We strive to ensure that our customers receive the best service possible. If you have any comments, suggestions, or questions, please contact the correct department using the information below. We look forward to working with you.ISO Parts Corporate Headquarters',
						_react2['default'].createElement('br', null),
						'Address:',
						_react2['default'].createElement('br', null),
						'2350 Commerce Park Drive',
						_react2['default'].createElement('br', null),
						'Palm Bay,',
						_react2['default'].createElement('br', null),
						'FL',
						_react2['default'].createElement('br', null),
						'32905',
						_react2['default'].createElement('br', null),
						'USA',
						_react2['default'].createElement('br', null),
						'Web Address:',
						_react2['default'].createElement('br', null),
						_react2['default'].createElement(
								'a',
								{ href: 'http://www.iso-parts.com' },
								'http://www.iso-parts.com'
						),
						_react2['default'].createElement('br', null),
						'Email:',
						_react2['default'].createElement('br', null),
						_react2['default'].createElement(
								'a',
								{ href: 'mailto:info@iso-parts.com' },
								'info@iso-parts.com'
						),
						_react2['default'].createElement('br', null),
						'Telephone:',
						_react2['default'].createElement('br', null),
						'+1-877-330-1580',
						_react2['default'].createElement('br', null),
						'Fax:',
						_react2['default'].createElement('br', null),
						'+1-321-777-0499'
				);
		}
});

exports['default'] = Contact;
module.exports = exports['default'];