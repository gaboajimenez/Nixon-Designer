import { createNotificacion } from "../../components/notificaciones.js";
const inputUser = document.querySelector("#usuario");
const inputPass = document.querySelector("#password");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!inputUser.value || !inputPass.value) {
    //alert("Por favor ingrese un usuario y una contraseña")
    createNotificacion(true, respuesta.data.mensaje);
  } else {
    try {
      const respuesta = await axios.get("/api/users/consultar-usuario", {
        params: {
          usuario: inputUser.value,
          password: inputPass.value,
        },
      });
      createNotificacion(false, respuesta.data.mensaje);
    } catch (error) {
      console.log(error);
      createNotificacion(true, error.response.data.mensaje);
    }
  }
});
