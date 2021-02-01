import { query } from "express";
import { model } from "mongoose";
import models from "../models";

//export default (server) => {
module.exports = function (server) {
  var io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:4200",
      methods: ["GET", "POST"],
    },
  });

  var socketMap = [];
  async function dataUpdate(reg) {
    console.log("Socket Emmit");    
    for (let socketMapObj of socketMap) {
      socketMapObj.emit("dataUpdate", reg);
    }
  }
  
  io.on("connection", (socket) => {
    console.log("Client Connected");
    socketMap.push(socket);
    // dataUpdate();
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  return {
    add: async (req, res, next) => {
      try {
        const reg = await models.Tracking.create(req.body);
        dataUpdate(reg);
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
};
