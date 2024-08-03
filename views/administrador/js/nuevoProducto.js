import { nuevoProducto } from "../../../controller/api"

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', validarProducto)

async function validarProducto (e){
    e.preventDefaut()

    const nombre = document.querySelector('#nombre').value
    const precio = document.querySelector('#precio').value

    const producto = 
    {
        nombre,
        precio,
    }


    if (validar (producto)){
     await nuevoProducto(producto)
     window.location.href = '/'

    }
}

function validar (objeto){

    return Object.values(objeto).every(i=>i!=='')

 }