
import routerx from 'express-promise-router';

//Model / Controllador
import trackingController from '../controller/trackingController';

const router = routerx();

/** Metodo principal de la herramienta. */
router.post('/add',trackingController.add);

/** Metodos  disponibles solo para pruebas. */
router.get('/list',trackingController.list);
router.get('/clean',trackingController.deleteall);


export default router;