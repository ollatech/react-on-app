'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	render: function render(component) {
		return ReactDOMServer.renderToString(component);
	}
};