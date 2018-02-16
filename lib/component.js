'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = new _map2.default();
exports.default = {
	register: function register(args) {
		(0, _keys2.default)(args).forEach(function (name) {
			if (_components.has(name)) {
				console.warn('Called register for component that is already registered', name);
			}
			var component = args[name];
			if (!component) {
				throw new Error('Called register with null component named ' + name);
			}
			_components.set(name, component);
		});
	},
	get: function get(name) {
		if (_components.has(name)) {
			return _components.get(name);
		}
		var keys = (0, _from2.default)(_components.keys()).join(', ');
		throw new Error('Could not find component registered with name ' + name);
	},
	components: function components() {
		return _components;
	}
};