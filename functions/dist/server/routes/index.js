"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _auth = _interopRequireDefault(require("./auth"));

var _main = _interopRequireDefault(require("./main"));

var _get = _interopRequireDefault(require("./get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  auth: _auth.default,
  main: _main.default,
  get: _get.default
};
exports.default = _default;
//# sourceMappingURL=index.js.map