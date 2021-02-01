import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import path from "path";

const app = express("express");
const http = require("http").createServer(app);
const router = require("./routes")(http);

mongoose.Promise = global.Promise;

/** Conexion Base de Datos Mongo DB Atlas. */
const dbUrl =
  "mongodb+srv://tracking:m0n1t0r30@trackingapi.pk5kg.mongodb.net/Tracking?retryWrites=true&w=majority";

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((mongoose) => console.log("Conectando a la base de datos"))
  .catch((err) => console.log(err));

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + "\\public")));

app.use("/api", router);

app.set("port", process.env.PORT || 3000);

//Gestion de las Rutas
http.listen(3000, "localhost");
/* app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
}); */


