import {productoServices} from "../service/productos-service.js";


const nuevoProducto = (imagen, titulo, precio) => {

    const card = document.createElement('div')
    const contenido = `
   
        <h1 id="consolas">star wars</h1>
            <ul >
                <div class="star__wars">
                        <a id="verTodo" href="#">ver todo →</a>  
                </div>
                        <li class="producto">
                            <img class="zoom" src=${imagen} alt="foto 1"> 
                            <h4  class="titulo__producto">${titulo}</h4>
                            <p class="precio">${precio}</p>
                            <a href="#" class="ver__producto">producto</a>
                        </li>
                </div>
            </ul> 
`;
console.log(contenido)
card.innerHTML = contenido
card.dataset.id=id

return card
}
const productos = document.querySelector('[data-product]');




/*document.querySelector ('form')*/