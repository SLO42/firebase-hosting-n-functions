"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const router = (0, _express.Router)();
router.get('=Authenticate', async (req, res) => {
  if (req.body) console.log(req.body);
  res.send("test");
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=auth.js.map