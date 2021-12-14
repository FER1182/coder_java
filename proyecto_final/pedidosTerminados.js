/***********************
      VARIABLES
 **********************/


      let contenedorPedidos =document.querySelector("#tablaPedidos");
     
      
      let pedidoTerminado = [];
      
      /***********************
            FUNCIONES
       **********************/
      // funcion que muestra los pedidos a preparar
      
      function mostrarPedido(array) {
          contenedorPedidos.innerHTML = "";
          for (e of array) {
            contenedorPedidos.innerHTML += `
                  <tr class="item">
                      <th scope="row">${e.idPedido}</th>
                      <td>${e.fecha}</td>
                      <td>${e.cliente}</td>
                      <td>${e.vendedora}</td>
                      <td><button type="button" class="btn btn-danger " onclick="armarPedido(${e.idPedido})">Pagar</button></td>
                  </tr>`;
          }
      }
      
      
     
      /***********************
            EVENTOS
       **********************/
      
      mostrarPedido(JSON.parse(localStorage.getItem("pedidosTerminados")));