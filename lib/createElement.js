'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createElement;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createElement(_ref) {
  var componentObj = _ref.componentObj,
      props = _ref.props;

  return _react2.default.createElement(componentObj, props);
}