'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function () {
	function Container() {
		(0, _classCallCheck3.default)(this, Container);

		this.app = _app2.default;
	}

	(0, _createClass3.default)(Container, [{
		key: 'app',
		value: function app() {
			return this.app;
		}
	}, {
		key: 'store',
		value: function store(data) {}
	}, {
		key: 'history',
		value: function history() {}
	}, {
		key: 'component',
		value: function component(args) {
			return this.app.component().set(args);
		}
	}]);
	return Container;
}();

exports.default = Container;