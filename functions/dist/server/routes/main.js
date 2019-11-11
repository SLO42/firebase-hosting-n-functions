"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _main = _interopRequireDefault(require("../html/main.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get('/', (req, res) => res.send(_main.default));
var _default = router;
exports.default = _default;
//# sourceMappingURL=main.js.map