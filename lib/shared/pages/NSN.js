'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var NSNList = _react2['default'].createClass({
  displayName: 'NSNList',

  contextTypes: {
    router: _react2['default'].PropTypes.func
  },
  render: function render() {
    //let { router } = this.context;
    //let Nsn = router.getCurrentParams().nsn;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'ul',
        null,
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: "nsnDetail", params: { nsn: "1234-12-123-12345" } },
            '1234-12-123-12345'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: "nsnDetail", params: { nsn: "1234-12-123-12346" } },
            '1234-12-123-12346'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: "nsnDetail", params: { nsn: "1234-12-123-12347" } },
            '1234-12-123-12347'
          )
        ),
        _react2['default'].createElement(
          'li',
          null,
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: "nsnDetail", params: { nsn: "1234-12-123-12348" } },
            '1234-12-123-12348'
          )
        )
      )
    );
  }
});

exports['default'] = NSNList;
module.exports = exports['default'];