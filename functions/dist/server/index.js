"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expressServer(app, router) {
  app = app || (0, _express.default)();
  router = router || _express.default.Router();
  app.use(_bodyParser.default.json());
  app.use(_bodyParser.default.urlencoded({
    extended: true
  }));
  app.use('/old', _routes.default.main);
  app.use('/command=auth', _routes.default.auth);
  app.use('/command=get', _routes.default.get);
}

var _default = expressServer;
exports.default = _default;
//# sourceMappingURL=index.js.map