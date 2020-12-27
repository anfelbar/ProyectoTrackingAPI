//Importar todas las rutas.

import routerx from 'express-promise-router';

import trackingRouter from './tracking';
import initsetupRouter from './initsetup';

const router = routerx();

router.use('/tracking',trackingRouter);
router.use('/initsetup',initsetupRouter);


export default router;