//Importar todas las rutas.

import routerx from 'express-promise-router';

import trackingRouter from './tracking';

const router = routerx();

router.use('/tracking',trackingRouter);


export default router;