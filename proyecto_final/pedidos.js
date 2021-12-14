/***********************
      VARIABLES
 **********************/


let contenedorPedidos =document.querySelector("#tablaPedidos");
let contenedorCarrito =document.querySelector("#tablaCarro");
let contenedorFooterCarrito =document.querySelector("#footerCarrito");

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
                <td><button type="button" class="btn btn-danger " onclick="armarPedido(${e.idPedido})">Armar</button></td>
                <td><button class="btn btn-danger " onclick="quitarPedido(${e.idPedido})">X</button></td>
            </tr>`;
    }
}


// funcion que detalla dentro de un popup el todo lo que tenia el carrito de ese pedido y genera un inputradio que informa si hay de ese producto
function armarPedido(idPedido) {
    let pedidos = JSON.parse(localStorage.getItem("pedido"));
    let pedidoSeleccionado = pedidos.find((e) => e.idPedido == idPedido);

    
    let carritoSeleccionado = pedidoSeleccionado.carritoPedido;
   
    $('#modalPedidos').modal('show');
    
    
    contenedorCarrito.innerHTML = "";
    contenedorFooterCarrito.innerHTML="";
    for (e of carritoSeleccionado) {
      contenedorCarrito.innerHTML += `
            <tr class="item">
                <th scope="row">${e.idCarro}</th>
                <td><img src="${e.img}" class="card-img-top" id="imagenCarrito" alt="${e.nombre}"></td>
                <td>${e.codigo}</td>
                <td>${e.cantidad}</td>
                <td>$${e.precio}</td>
                <td> <input type="radio" id="${e.idCarro}" name=${e.idCarro} value="si" checked> <label for="si">si</label></td>
                <td> <input type="radio" id="${e.idCarro}" name=${e.idCarro} value="no" unchecked> <label for="no">no</label></td>
                
            </tr>`;
    }
    /*  contenedorCarrito.innerHTML += `
            <tr>
                <td class="text-center" colspan="3" >Total</td>
                <td colspan="2">$<span id="totalCarrito">0</span></td>
            </tr>
            `;      */  
    
    contenedorFooterCarrito.innerHTML += `            
                    <button type="button" class="close btn btn-secondary" id="cerrarModal" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="pedidoPreparado" >Pedido Preparado</button>
                    
    `;


    //funcion que toma que producto habia del pedido para terminar de preparalo

    $("#pedidoPreparado").click(function(){
        
      console.log(idPedido);
      for (var i = 0; i<contenedorCarrito.rows.length-1; i++) {
         
          if(document.getElementById(i+1).checked==true) {
            
        }else{
            carritoSeleccionado=carritoSeleccionado.filter((e) => e.idCarro != i+1);
        }
      }
      console.log(carritoSeleccionado);
      pedidoSeleccionado.carritoPedido=carritoSeleccionado;
      nombreArray="pedidosTerminados";
      guardarStorage(nombreArray,agregarStorage(pedidoSeleccionado));
      quitarPedido(idPedido);
  });



    $(".close").click(function(){
        $("#modalPedidos").modal('hide')
      });
  }

//funcion que agrega pedidos terminados
function agregarStorage(pedidoTerminado) {
  let lastItem = 0;

  let storage = localStorage.getItem("pedidosTerminados")
    ? JSON.parse(localStorage.getItem("pedidosTerminados"))
    : [];

  storage.push(pedidoTerminado);
  return storage;
}

//guarda en el storage que le digo
  function guardarStorage(nombreArray,array) {
    localStorage.setItem(nombreArray, JSON.stringify(array));
  }


  //funcion para sacar pedidos del storage de pedidos pendientes
  function quitarPedido(id) {
  let pedido = JSON.parse(localStorage.getItem("pedido"));
  let pedidoFinal = pedido.filter((e) => e.idPedido != id);
  nombreArray="pedido"
  guardarStorage(nombreArray,pedidoFinal);
  location.reload();
}
/***********************
      EVENTOS
 **********************/

mostrarPedido(JSON.parse(localStorage.getItem("pedido")));