/***********************
      VARIABLES
 **********************/


let contenedorPedidos =document.querySelector("#tablaPedidos");
let contenedorCarrito =document.querySelector("#tablaCarro");
let contenedorFooterCarrito =document.querySelector("#footerCarrito");
let radioSi =document.querySelector("#si");
let radioNo =document.querySelector("#no");


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
                <td><button type="button" class="btn btn-danger " onclick="armarPedido(${e.idPedido})">Armar</button></td>
                <td><button class="btn btn-danger " onclick="eliminarPedido(${e.idPedido})">X</button></td>
            </tr>`;
    }
}

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
     contenedorCarrito.innerHTML += `
            <tr>
                <td class="text-center" colspan="3" >Total</td>
                <td colspan="2">$<span id="totalCarrito">0</span></td>
            </tr>
            `;       
    
    contenedorFooterCarrito.innerHTML += `            
                    <button type="button" class="close btn btn-secondary" id="cerrarModal" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="pedidoPreparado" >Pedido Preparado</button>
                    
    `;

    $("#pedidoPreparado").click(function(){
        

      for (var i = 0; i<contenedorCarrito.rows.length-1; i++) {
        
        console.log(document.getElementById(i+1).checked);
        //alert(cell[i].innerText);
       // for (var j = 5, col; col = row.cells[j]; j++) {
            //console.log(cell[5].value);
          //console.log(`Txt: ${col.innerText} \tFila: ${i} \t Celda: ${j}`);
      //    if(document.querySelector(`#si${i}`).checked==true) {
        //    console.log("si");
       // }else if(document.querySelector(`#no${i}`).checked==true) {
         //   console.log("no");
       // }
        
    
     }
    
    
    
        /*     $(this).parent().parent().each(function() {
           i++
           console.log($(this));
           console.log(i); 
          if(document.getElementById('si').checked) {
                //Male radio button is checked
                console.log("sipi");
              }else if(document.getElementById('no').checked) {
                //Female radio button is checked
                console.log("nop");
              }
            var total = $(this).find("td:eq(5)").text();
            var total1 = $(this).find("td:eq(4)").text();
            console.log(total);
            console.log(total1); 
            
          }); */
        
        
  
    });



    $(".close").click(function(){
        $("#modalPedidos").modal('hide')
      });
  }

/***********************
      EVENTOS
 **********************/

mostrarPedido(JSON.parse(localStorage.getItem("pedido")));