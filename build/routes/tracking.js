'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expressPromiseRouter = require('express-promise-router');

var _expressPromiseRouter2 = _interopRequireDefault(_expressPromiseRouter);

var _trackingController = require('../controller/trackingController');

var _trackingController2 = _interopRequireDefault(_trackingController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//rutas necesarias para acceder a las funciones del controlador.
var router = (0, _expressPromiseRouter2.default)();

//Main 


//Model / Controllador
router.post('/add', _trackingController2.default.add);
//
router.get('/query', _trackingController2.default.query);
router.get('/list', _trackingController2.default.list);
router.put('/update', _trackingController2.default.update);
router.delete('/remove', _trackingController2.default.remove);

router.put('/activate', _trackingController2.default.activate);
router.put('/desactivate', _trackingController2.default.deactivate);

exports.default = router;
//# sourceMappingURL=tracking.js.map