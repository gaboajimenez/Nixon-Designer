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
      const savedPlan = await plane.save();
      res.status(200).json({ mensaje: "se ha creado el plan" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear plan' });
      }
  }
})
//get all plans
planRouter.get("/listado", async (req, res) => {
  try {
    const plans = await plan.find();
    console.log(plans)
    res.status(200).json(plans);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener planes' });
      }
      })


      //delete
      planRouter.delete("/delete/:id", async (req, res) => {
        const codigo = req.params.id;
        try {
          const eliminar = await Producto.findByIdAndDelete({ codigo: codigo });
          res.status(200).json({
            message: "El producto se ha eliminado con éxito",
          });
          console.log("se ha eliminado el producto")
        }catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Error al borrar el plan' });
              }
              })

              //update plan
              planRouter.put("/plan/:id", async (req, res) => {
                const id = req.params.id;
                const { nombre, precio } = req.body;
                try {
                  const plan = await plan.findByIdAndUpdate(id, { nombre, precio }, { new: true });
                  if (!plan) {
                    return res.status(404).json({ message: 'Plan no encontrado' });
                    }
                    res.status(200).json(plan);
                    }
                    catch (error) {
                      console.error(error);
                      res.status(500).json({ message: 'Error al actualizar plan' });
                      }
                })
                


module.exports = planRouter;