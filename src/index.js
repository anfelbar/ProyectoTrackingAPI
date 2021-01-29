import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import path from "path";
import router from "./routes";
import models from "./models";
// import http  from 'http';
// import { io } from "socket.io";
// import async from "async";
async function dataUpdate(reg) {
  console.log("Socket Emmit");
  // var posiciones = await models.Tracking.find({});
  for (let socketMapObj of socketMap) {
    //if (posiciones.length > 0) {
      socketMapObj.emit("dataUpdate", reg);
    // }
  }
}

async function add2 (req, res, next) {
  try {
    const reg = await models.Tracking.create(req.body);
    dataUpdate(reg);
    res.status(200).json(reg);
  } catch (error) {
    res.status(500).send({ message: "ERROR" });
    next(error);
  }
}

mongoose.Promise = global.Promise;

/** Conexion Base de Datos Mongo DB Atlas. */
const dbUrl =
  "mongodb+srv://tracking:m0n1t0r30@trackingapi.pk5kg.mongodb.net/Tracking?retryWrites=true&w=majority";

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((mongoose) => console.log("Conectando a la base de datos"))
  .catch((err) => console.log(err));

const app = express("express");
const http = require("http").createServer(app);

var io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
  },
});

var socketMap = [];
io.on("connection", (socket) => {
  console.log("Client Connected");
  socketMap.push(socket);
  // dataUpdate();
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + "\\public")));

app.use("/api", router);



app.use('/api/add2', add2);
app.set("port", process.env.PORT || 3000);

//Gestion de las Rutas
http.listen(3000, "localhost");
/* app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
}); */


