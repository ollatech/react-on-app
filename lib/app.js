'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _component2 = require('./component');

var _component3 = _interopRequireDefault(_component2);

var _store2 = require('./store');

var _store3 = _interopRequireDefault(_store2);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _broswer = require('./broswer');

var _broswer2 = _interopRequireDefault(_broswer);

var _createElement = require('./createElement');

var _createElement2 = _interopRequireDefault(_createElement);

var _expose = require('./expose');

var _expose2 = _interopRequireDefault(_expose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ctx = (0, _expose2.default)();
ctx.ReactOnApp = {
	component: function component() {
		return _component3.default;
	},
	store: function store() {
		return _store3.default;
	},
	render: function render(domId, name, props, contexts, serverSide) {
		var componentObj = _component3.default.get(name);
		var componentResult = (0, _createElement2.default)({ componentObj: componentObj, props: props });
		if (serverSide) {
			return _server2.default.render(componentResult);
		}
		return _broswer2.default.render(componentResult, domId);
	}
};
exports.default = ctx.ReactOnApp;