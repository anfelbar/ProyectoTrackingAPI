//rutas necesarias para acceder a las funciones del controlador.
import routerx from 'express-promise-router';

//Model / Controllador
import trackingController from '../controller/trackingController';

const router = routerx();

//Main 
router.post('/add',trackingController.add);
//
router.get('/query',trackingController.query);
router.get('/list',trackingController.list);
router.put('/update',trackingController.update);
router.delete('/remove',trackingController.remove);

router.put('/activate',trackingController.activate);
router.put('/desactivate',trackingController.deactivate);


export default router;