import { query } from "express";
import { model } from "mongoose";
import models from "../models";
import socketio from 'socket.io';

// const io = socketio.listen(app);

// import { io } from "socket.io";
// import async from "async";
// var io = require('socket.io')(http);

/**
 * POST - GET request.
 */

/* var socketMap = [];
io.on("connection", (socket) => {
  console.log("Client Connected");
  socketMap.push(socket);
  dataUpdate();
}); */

/* async function dataUpdate() {
  console.log("Socket Emmit");
  var posiciones = await models.Tracking.find({});
  for (let socketMapObj of socketMap) {
    if (posiciones.length > 0) {
      socketMapObj.emit("dataUpdate", posiciones);
    }
  }
} */

export default {
  add: async (req, res, next) => {
    try {
      const reg = await models.Tracking.create(req.body);
      // dataUpdate();
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({ message: "ERROR" });
      next(error);
    }
  },
  list: async (req, res, next) => {
    try {
      const reg = await models.Tracking.find({});
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({ message: "ERROR" });
      next(error);
    }
  },
  deleteall: async (req, res, next) => {
    try {
      const reg = await models.Tracking.deleteMany({});
      res.send({ message: "Base de Datos limpia" });
      //res.status(200);
    } catch (error) {
      res.status(500).send({ message: "ERROR" });
      next(error);
    }
  },
  init: async (req, res, next) => {
    try {
      const reg = await models.Init.find({});
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({ message: "ERROR" });
      next(error);
    }
  },
  addinit: async (req, res, next) => {
    try {
      const reg = await models.Init.create(req.body);
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({ message: "ERROR" });
      next(error);
    }
  },
};




