//colocar en el html 

//<script src="index.js" type="module"></script> para exportar de otro script


const listado = document.querySelector('#listado-Productos');

document.addEventListener('DOMContentLoaded', mostrarHtml)
listado.addEventListener('click', confirmarEliminar)

async function consulta(){
    try{
        const listado =  await axios.get('/api/plans/listado')
        const {data} = listado
        return data
    }catch (error) {
        console.log(error)
      }
}

async function mostrarHtml(){
    const listadoProductos = await consulta()
    console.log(listadoProductos);

    listadoProductos.forEach(i => {
        const {precio, id, nombre} = i

        const row = document.createElement('tr')
        row.innerHTML = `
       <td class="px-6 py-4 border-b border-gray-200"> <p class="font-bold text-black">${nombre}</p> </td>
       <td class="px-6 py-4 border-b border-gray-200"> <p class="text-center text-black">${precio}</p> </td>

       <td class="px-6 py-4 border-b border-gray-200">
       
       <a href="#" class="text-red-400 font-bold hover: eliminar"  data-producto="${id}"> Eliminar <a>
       </td>
        `
        listado.appendChild(row)
    });    


}

async function confirmarEliminar(e){
   // e.preventDefault()

  if  (e.target.classList.contains('eliminar')){
    const confirmar = confirm('¿Deseas eliminar este producto?')

     const productoId = e.target.dataset.producto
     console.log(productoId)

    if (confirmar){
       try{
        await borrar(productoId)
        const row = e.target.closest('tr')
        row.remove()
       }catch (error) {
        console.log(error)
      }
     
  }
}
}
async function borrar(id){
    try{
         await axios.delete(`/api/plans/delete/${id}`)
    }catch (error) {
        console.log(error)
      }
}
