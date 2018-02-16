'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _context = require('./context');

var _context2 = _interopRequireDefault(_context);

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _broswer = require('./broswer');

var _broswer2 = _interopRequireDefault(_broswer);

var _createElement = require('./createElement');

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ctx = (0, _context2.default)();

ctx.ReactOnApp = {
	register: function register(args) {
		return _component2.default.register(args);
	},
	render: function render(options) {
		var serverSide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var name = options.name,
		    domNodeId = options.domNodeId,
		    props = options.props,
		    railsContext = options.railsContext;

		var componentObj = _component2.default.get(name);
		if (!componentObj) {
			console.log('component not found', name);
		}
		var componentResult = (0, _createElement2.default)({
			componentObj: componentObj,
			props: props,
			railsContext: railsContext
		});
		if (serverSide) {
			return _server2.default.render(componentResult);
		}
		return _broswer2.default.render(componentResult, domNodeId);
	}
};

exports.default = ctx.ReactOnApp;