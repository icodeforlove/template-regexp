'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _escapeRegexp = require('escape-regexp');

var _escapeRegexp2 = _interopRequireDefault(_escapeRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// proto trickery
var TRegExp = function (_RegExp) {
	(0, _inherits3.default)(TRegExp, _RegExp);

	function TRegExp() {
		(0, _classCallCheck3.default)(this, TRegExp);

		// convenience getters
		var _this = (0, _possibleConstructorReturn3.default)(this, (TRegExp.__proto__ || (0, _getPrototypeOf2.default)(TRegExp)).apply(this, arguments));

		_this.__proto__.__defineGetter__('_', function () {
			return _this.flags ? new TRegExp(_this.source) : _this;
		}, { enumerable: false, writable: false });

		// flags
		['g', 'i', 'm', 'u', 'y'].forEach(function (flag) {
			_this.__proto__.__defineGetter__(flag, function () {
				return _this.flags.indexOf(flag) === -1 ? new TRegExp(_this.source, _this.flags + flag) : _this;
			});
		}, {
			enumerable: false,
			writable: false
		});
		return _this;
	}

	return TRegExp;
}(RegExp);

function regexp(pieces) {
	pieces = pieces.raw;

	var result = pieces[0],
	    substitutions = [].slice.call(arguments, 1);

	for (var i = 0; i < substitutions.length; ++i) {
		result += (0, _escapeRegexp2.default)(substitutions[i]) + pieces[i + 1];
	}

	return new TRegExp(result);
}

exports.default = regexp;
module.exports = exports['default'];