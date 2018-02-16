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

	/**
  * [render description]
  * @param  {String}  domId      [description]
  * @param  {String}  component  [description]
  * @param  {Object}  props      [description]
  * @param  {Object}  appContext [description]
  * @param  {Boolean} serverSide [description]
  * @return {[type]}             [description]
  */
	render: function render(domId, name) {
		var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		var appContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
		var serverSide = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

		var componentObj = _component2.default.get(name);
		if (!componentObj) {
			console.log('component not found', name);
		}
		var componentResult = (0, _createElement2.default)({
			componentObj: componentObj,
			props: props,
			appContext: appContext
		});
		if (serverSide) {
			return _server2.default.render(componentResult);
		}
		return _broswer2.default.render(componentResult, domId);
	}
};

exports.default = ctx.ReactOnApp;