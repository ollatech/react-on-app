'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	render: function render(component, domNode) {
		_reactDom2.default.render(component, document.getElementById(domNode));
	}
};