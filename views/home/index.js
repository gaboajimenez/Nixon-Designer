const listado = document.querySelector('#listado-Productos');
document.addEventListener('DOMContentLoaded', mostrarHtml)
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
        const {precio,  nombre} = i

        const row = document.createElement('tr')
        row.innerHTML = `
        
       <td class="px-6 py-4 border-b border-gray-200"> <p class="font-bold text-[16px] text-black">${nombre}</p> </td>
       <td class="px-6 py-4 border-b border-gray-200"> <p class="text-center text-[16px] text-black">${precio}</p> </td>
        `
        listado.appendChild(row)
    });    


}