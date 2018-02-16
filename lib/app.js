'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _broswer = require('./broswer');

var _broswer2 = _interopRequireDefault(_broswer);

var _createElement = require('./createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ctx = function ctx() {
	return typeof window !== 'undefined' && window || typeof global !== 'undefined' && global || undefined;
};
ctx.ReactOnApp = {
	register: function register(args) {
		return _component2.default.register(args);
	},
	render: function render(domId, name, props, appContext, serverSide) {
		var componentObj = _component2.default.get(name);
		var componentResult = (0, _createElement2.default)({ componentObj: componentObj, props: props });
		if (serverSide) {
			return _server2.default.render(componentResult);
		}
		return _broswer2.default.render(componentResult, domId);
	}
};
exports.default = ctx.ReactOnApp;