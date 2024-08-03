const mongoose = require("mongoose");


const user = new mongoose.Schema({
  usuario: String,
  contraseña: String,
  telefono: String,
  email: String,
  verificar: {
    type: Boolean,
    default: false,
  },
});


//respuesta del usuario en el esquema

user.set("toJSON", {
  transform: (document, returnObj) => {
    returnObj.id = returnObj._id.toString();
    delete returnObj._id;
  },
});

//registrar el modelo

const usuario = mongoose.model("User", user);

//exportar

module.exports = usuario;
