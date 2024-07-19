import { createNotificacion } from "../../components/notificaciones.js";
const inputUser = document.querySelector("#usuario");
const inputPass = document.querySelector("#password");

const usuarioAdmin= "gaboajimenez07@gmail.com"
const contraseñaAdmin = "gabriel2004."

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!inputUser.value || !inputPass.value) {
    //alert("Por favor ingrese un usuario y una contraseña")
    createNotificacion(true, respuesta.data.mensaje);
  } 
  if (inputUser.value === usuarioAdmin && inputPass.value === contraseñaAdmin){
    window.location.href = "/administrador";

  }else  {
    try {
      const respuesta = await axios.get("/api/users/consultar-usuario", {
        params: {
          usuario: inputUser.value,
          password: inputPass.value,
        },
       
      });
      createNotificacion(false, respuesta.data.mensaje, window.location.href = "/");
    } catch (error) {
      console.log(error);
      createNotificacion(true, error.response.data.mensaje);
    }
  }
});
