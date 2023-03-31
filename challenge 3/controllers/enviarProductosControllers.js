




import {productoServices} from "../service/productos-service.js";

const form = document.querySelector ('[data-tipo]')

form.addEventListener ("submit", (evento) => {

    evento.preventDefault();



const imagen = document.querySelector ('[data-imagen]').value;
const titulo = document.querySelector ('[data-titulo]').value;
const precio = document.querySelector ('[data-precio]').value;

productoServices
.crearProducto(imagen, titulo, precio)
.then((respuesta) => {
   if (respuesta != null) { window.location.href ="./index.html"  }
}) .catch (error => {

    console.log(error);
});

});


/*document.querySelector ('form')*/