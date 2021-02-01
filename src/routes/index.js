//Importar todas las rutas.
import routerx from "express-promise-router";
import initsetupRouter from "./initsetup";

module.exports = function (server) {
  const router = routerx();
  const trackingRouter = require("./tracking")(server);


  router.use("/tracking", trackingRouter);
  router.use("/initsetup", initsetupRouter);

  return router;
};
