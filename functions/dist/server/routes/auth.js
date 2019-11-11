"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const router = (0, _express.Router)();
router.get('', async (req, res) => {
  console.log("auth : get request");
  return res.send("start of auth post");
});
router.post('', (req, res) => {
  console.log('req.body');
  Object.keys(req.body).map(key => {
    console.log(key);
    console.log(req.body[key]);
  });
  console.log('^req.body^');
  res.send("testing");
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=auth.js.map