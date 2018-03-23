'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Logger);

    this.env = settings.env || 'development';
    this.enabledInProduction = settings.enabledInProduction || {};
  }

  _createClass(Logger, [{
    key: 'call_',
    value: function call_(cb, type) {
      if (this.env !== 'production' || this.enabledInProduction[type]) {
        cb();
      }
    }
  }, {
    key: 'prettify_',
    value: function prettify_(message) {
      if (message instanceof Error) {
        return message;
      }
      return (typeof message === 'undefined' ? 'undefined' : _typeof(message)) === 'object' ? JSON.stringify(message) : message;
    }
  }, {
    key: 'error',
    value: function error(message) {
      var _this = this;

      this.call_(function () {
        return console.log(_chalk2.default.red.bold('\uD835\uDE6D ' + _this.prettify_(message)));
      }, 'error');
    }
  }, {
    key: 'warning',
    value: function warning(message) {
      var _this2 = this;

      this.call_(function () {
        return console.log(_chalk2.default.yellow('\uD835\uDE6D ' + _this2.prettify_(message)));
      }, 'warning');
    }
  }, {
    key: 'success',
    value: function success(message) {
      var _this3 = this;

      this.call_(function () {
        return console.log(_chalk2.default.green.bold('\u2714 ' + _this3.prettify_(message)));
      }, 'success');
    }
  }, {
    key: 'debug',
    value: function debug(message) {
      var _this4 = this;

      this.call_(function () {
        return console.log(_chalk2.default.gray('' + _this4.prettify_(message)));
      }, 'debug');
    }
  }]);

  return Logger;
}();

exports.default = Logger;