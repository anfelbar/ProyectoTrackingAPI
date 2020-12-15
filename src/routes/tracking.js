
import routerx from 'express-promise-router';

//Model / Controllador
import trackingController from '../controller/trackingController';

const router = routerx();

/** Metodo principal de la herramienta. */
router.post('/add',trackingController.add);

/** Metodo solo disponible para pruebas. */
router.get('/list',trackingController.list);


export default router;