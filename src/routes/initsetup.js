import routerx from 'express-promise-router';
//Model / Controllador
import initsetupController from '../controller/initsetupController';

const router = routerx();

/** Metodo para inicio de GPS - Valores de Iniciacion. */
router.get('/init',initsetupController.init);
router.post('/addinit',initsetupController.addinit);

export default router;