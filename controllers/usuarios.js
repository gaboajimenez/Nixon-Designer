const userRouter = require("express").Router();
const user = require("../models/usuario");

userRouter.post("/registro", async (req, res) => {
  const { nombre, email, password, telefono } = req.body;

  const listado = [nombre, email, password, telefono].some((i) => i === "");

  if (listado) {
    return res.status(400).json({ error: "No puede dejar los campos vacios" });
  } else {
    let usuario = new user();
    usuario.usuario = nombre;
    usuario.email = email;
    usuario.telefono = telefono;
    usuario.contraseña = password;

    async function guardarUsuario() {
      await usuario.save();
      guardarUsuario().catch(console.error);
    }

    guardarUsuario();
    res.status(200).json({ mensaje: "se ha creado el usuario" });
  }

  /* usuario.usuario = nombre;
  usuario.email = email;
  usuario.password = password;
  usuario.telefono = telefono;

  try {
    await usuario.save();
    res.status(200).json({
      message: "Se ha creado el usuario con exito",
    });
  } catch (err) {
    console.error();
  }*/
});

userRouter.get("/consultar-usuario", async (req, res) => {
  const { usuario, password } = req.query;
  try {
    const consulta = await user.findOne({ usuario });
    console.log(consulta);
    if (consulta) {
      if (consulta.contraseña === password) {
        res.status(200).json({
          mensaje: "Ha iniciado sesión con éxito",
        });
      } else {
        res.status(400).json({
          mensaje: "Algún campo es erróneo",
        });
      }
    } else {
      res.status(400).json({
        mensaje: "Algún campo es erróneo",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Hubo un error inesperado",
    });
  }
});

module.exports = userRouter;

