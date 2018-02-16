'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = new _map2.default();
exports.default = {
	set: function set(args) {
		(0, _keys2.default)(args).forEach(function (name) {
			if (components.has(name)) {
				console.warn('Called register for component that is already registered', name);
			}
			var component = args[name];
			if (!component) {
				throw new Error('Called register with null component named ' + name);
			}
			components.set(name, component);
		});
	},
	add: function add(name, component) {
		if (components.has(name)) {
			console.warn('Called register for component that is already registered', name);
		}
		if (!component) {
			throw new Error('Called register with null component named ' + name);
		}
		components.set(name, component);
	},
	get: function get(name) {
		if (components.has(name)) {
			return components.get(name);
		}
		throw new Error('Could not find component registered with name ' + name);
	},
	all: function all() {
		return components;
	}
};