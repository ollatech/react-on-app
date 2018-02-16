'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Provider = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Provider = exports.Provider = function () {
	function Provider() {
		(0, _classCallCheck3.default)(this, Provider);

		this.app = _app2.default;
	}

	(0, _createClass3.default)(Provider, [{
		key: 'store',
		value: function store(data) {}
	}, {
		key: 'history',
		value: function history() {}
	}, {
		key: 'component',
		value: function component(args) {
			return this.app.component().set($args);
		}
	}]);
	return Provider;
}();