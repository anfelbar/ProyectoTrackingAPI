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
//router.get('/query',trackingController.query);
router.get('/list', _trackingController2.default.list);
//router.put('/update',trackingController.update);
//router.delete('/remove',trackingController.remove);

//router.put('/activate',trackingController.activate);
//router.put('/desactivate',trackingController.deactivate);


exports.default = router;
//# sourceMappingURL=tracking.js.map