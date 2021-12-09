/***********************
      VARIABLES
 **********************/


let contenedorPedidos =document.querySelector("#tablaPedidos");


/***********************
      FUNCIONES
 **********************/
// funcion que muestra los pedidos a prepar

function mostrarPedido(array) {
    contenedorPedidos.innerHTML = "";
    for (e of array) {
      contenedorPedidos.innerHTML += `
            <tr class="item">
                <th scope="row">${e.idPedido}</th>
                <td>${e.fecha}</td>
                <td>${e.cliente}</td>
                <td>${e.vendedora}</td>
                <td><button class="btn btn-danger " onclick="armarPedido(${e.idPedido})">Armar</button></td>
                <td><button class="btn btn-danger " onclick="eliminarPedido(${e.idPedido})">X</button></td>
            </tr>`;
    }
}

/***********************
      EVENTOS
 **********************/

mostrarPedido(JSON.parse(localStorage.getItem("pedido")));