import routerx from "express-promise-router";

module.exports = function (server) {
  const router = routerx();
  const trackingController = require("../controller/trackingController")(
    server
  );
  /** Metodo principal de la herramienta. */
  router.post("/add", trackingController.add);
  router.get("/list", trackingController.list);
  return router;
};
