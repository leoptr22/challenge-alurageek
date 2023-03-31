const listaProductos = () => {
    fetch(`http://localhost:3000/productos`)
    .then(respuesta => respuesta.json())
    .catch((error) => console.log(error));
     
}


const crearProducto = ( imagen, titulo, precio) => {
  return fetch(`http://localhost:3000/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({imagen, titulo, precio}),
  })
}
export const productoServices = {

listaProductos,
crearProducto,

}