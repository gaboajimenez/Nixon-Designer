import { nuevoProducto } from "../../../controller/api"

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', validarProducto)

async function validarProducto (e){
    e.preventDefaut()

    const nombre = document.querySelector('#nombre').value
    const precio = document.querySelector('#precio').value
    const newPlan = {
        nombre: nombre.value,
        precio: precio.value,
        
      };
      try {
        const post = await axios.post("/api/plans/administrador", newPlan);
        //alert(post.data.mensaje)
        createNotificacion(false, post.data.mensaje);
        
        
      } catch (error) {
        console.log(error);
        createNotificacion(true, error.response.data.error);
      }

    }
    

function validar (objeto){

    return Object.values(objeto).every(i=>i!=='')

 }