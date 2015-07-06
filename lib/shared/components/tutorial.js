"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var CommentBox = _react2["default"].createClass({
  displayName: "CommentBox",

  render: function render() {
    return _react2["default"].createElement(
      "div",
      { className: "commentBox" },
      "Hello, ",
      this.props.name,
      "! I am a CommentBox."
    );
  }
});
exports["default"] = CommentBox;
module.exports = exports["default"];