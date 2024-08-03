require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const userRouter = require("./controllers/usuarios");
const planRouter = require("./controllers/planes")

async function conectarDB() {
  try {
    await mongoose.connect(process.env.token);
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.log("Error al conectar a la base de datos: " + error);
  }
}

conectarDB();

app.use(express.json());


app.use("/", express.static(path.resolve("views", "home")));
app.use("/Login", express.static(path.resolve("views", "login")));
app.use("/components", express.static(path.resolve("views", "components")));
app.use("/Register", express.static(path.resolve("views", "registro")));
app.use("/administrador", express.static(path.resolve("views", "administrador")));


// rutas back
app.use("/img",express.static(path.resolve("img")))
app.use("/controllers", express.static(path.resolve("controllers")));
console.log('hola')
app.use("/api/users", userRouter);
console.log('bien')
app.use("/api/plans", planRouter);



module.exports = app;
