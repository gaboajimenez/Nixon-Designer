const mongoose = require("mongoose");



const plan = new mongoose.Schema({
    nombre: String,
    precio: String,
    
  });
  plan.set("toJSON", {
    transform: (document, returnObj) => {
      returnObj.id = returnObj._id.toString();
      delete returnObj._id;
    },
  });
  const planes= mongoose.model("Plan", plan);
  module.exports = planes