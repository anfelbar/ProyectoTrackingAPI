'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _tracking = require('./tracking');

var _tracking2 = _interopRequireDefault(_tracking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Importar todas las rutas.

var router = (0, _expressPromiseRouter2.default)();

router.use('/tracking', _tracking2.default);

exports.default = router;
//# sourceMappingURL=index.js.map