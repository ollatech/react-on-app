'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stores = new _map2.default();
exports.default = {
	set: function set(args) {
		(0, _keys2.default)(args).forEach(function (name) {
			if (stores.has(name)) {
				console.warn('Called register for store that is already registered', name);
			}
			var store = args[name];
			if (!store) {
				throw new Error('Called register with null store named ' + name);
			}
			stores.set(name, store);
		});
	},
	add: function add(name, store) {
		if (stores.has(name)) {
			console.warn('Called register for store that is already registered', name);
		}
		if (!store) {
			throw new Error('Called register with null store named ' + name);
		}
		stores.set(name, store);
	},
	get: function get(name) {
		if (stores.has(name)) {
			return stores.get(name);
		}
		throw new Error('Could not find store registered with name ' + name);
	},
	all: function all() {
		return stores;
	}
};