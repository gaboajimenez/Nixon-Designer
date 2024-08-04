const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", validarProducto);

async function validarProducto(e) {
  e.preventDefault();

  const nombre = document.querySelector("#nombre");
  const precio = document.querySelector("#precio");
  
  const newPlan = {
    nombre: nombre.value,
    precio: precio.value,
    
  };
  try {
    if (!nombre.value || !precio.value) {
      createNotificacion(true, "No puede dejar los campos vacios");
      return;
    }
    const post = await axios.post("/api/plans/administrador", newPlan);
    //alert(post.data.mensaje)
    createNotificacion(false, post.data.mensaje);
    formulario.reset();

  } catch (error) {
    console.log(error);
  }
}
function createNotificacion(error, message) {
  const div = document.querySelector("#notificacion");
  if (error) {
    div.innerHTML = `
        <div class = "flex  max-w-7x1 mx-auto px-4">
        <p class = "bg-red-500 p-4 w-3/12 rounded-1g font-bold">
        ${message}</p>
        </div>
        `;
  } else {
    div.innerHTML = `
        <div class = "flex   max-w-7x1 mx-auto px-4">
        <p class = "bg-green-500 p-4 w-3/12 rounded-1g font-bold">
        ${message}</p>
        </div>
        `;
  }
  setTimeout(() => {
    div.remove();
  }, 3000);
}
