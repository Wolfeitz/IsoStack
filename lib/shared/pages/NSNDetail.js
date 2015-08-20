'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsDetailPageTitleBox = require('../components/detailPageTitleBox');

var _componentsDetailPageTitleBox2 = _interopRequireDefault(_componentsDetailPageTitleBox);

var NSN = _react2['default'].createClass({
  displayName: 'NSN',

  contextTypes: {
    router: _react2['default'].PropTypes.func
  },
  render: function render() {
    var router = this.context.router;

    var Nsn = router.getCurrentParams().nsn;
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_componentsDetailPageTitleBox2['default'], { name: 'Rob', nsn: Nsn, description: 'OH MY Gosh Golly!' })
    );
  }
});

exports['default'] = NSN;
module.exports = exports['default'];