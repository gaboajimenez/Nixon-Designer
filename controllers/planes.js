//get / post / delete / update 

const planRouter = require("express").Router();
const plan = require("../models/plan");

planRouter.post("/administrador", async (req, res) => {
  const { nombre, precio} = req.body;
  const listado = [nombre, precio].some((i) => i === ""); 
  if (listado) {
    return res.status(400).json({ error: "No puede dejar los campos vacios" });
  } else {
    let plane = new plan();
    plane.nombre = nombre;
    plane.precio = precio; 
    try{
      plane.save();
      res.status(200).json({ mensaje: "se ha creado el plan" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear plan' });
      }
  }
})


module.exports = planRouter;