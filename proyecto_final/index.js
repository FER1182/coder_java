/***********************
  ENTIDADES/ LAS CLASES
 **********************/
//**PRODUCTOS****/

class Producto {
  //crea el objeto del producto para cuando tenga el formulario y pida al usuario la carga
  constructor(
    codigo,
    titulo,
    categoria,
    precio,
    descripcion,
    stock,
    idCarrito
  ) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.categoria = categoria;
    this.precio = precio;
    this.descripcion = descripcion;
    this.stock = stock;
    this.idCarrito = idCarrito;
    //metodo para informar que el producto fue agregado
    this.productoAgregado = () => {
      console.log("el producto " + this.titulo + " fue agregado con exito");
    };
    //metodo para sumar stock a un producto
    this.ingresoStock = (valor) => {
      this.stock = this.stock + valor;
      console.log(
        "ingresaste " + valor + " al stock del producto " + this.codigo
      );
      return this.stock;
    };
    //metodo para cuando se hace una venta resta del stock
    this.venta = (cantidad) => {
      this.stock = this.stock - cantidad;
      precioTotal = cantidad * this.precio;
      return precioTotal;
    };
  }
}
class ProductoCarro {
  // creo la clase que va a manejar todos los datos del carrito
  constructor(idCarro, codigo, cantidad, precio) {
    this.idCarro = idCarro;
    this.codigo = codigo;
    this.cantidad = cantidad;
    this.precio = precio;
  }
}
/***********************
      VARIABLES
 **********************/

//creo un array de productos
const productos = [
  {
    id: "1",
    codigo: "22104",
    nombre: "Camisa Square",
    detalle: "",
    categoria: "camisa",
    precio: 1200,
    img: "./imagenes/22104.jpg",
  },
  {
    id: "2",
    codigo: "26006",
    nombre: "Camisa Grecias",
    detalle: "",
    categoria: "remera",
    precio: 1300,
    img: "./imagenes/26006.jpg",
  },
  {
    id: "3",
    codigo: "26008",
    nombre: "Camisa Sofia",
    detalle: "",
    categoria: "camisa",
    precio: 1000,
    img: "./imagenes/26008.jpg",
  },
  {
    id: "4",
    codigo: "26014",
    nombre: "Camisa Maria",
    detalle: "",
    categoria: "remera",
    precio: 1300,
    img: "./imagenes/26014.jpg",
  },
  {
    id: "5",
    codigo: "26027",
    nombre: "Camisa Soledad",
    detalle: "",
    categoria: "camisa",
    precio: 1200,
    img: "./imagenes/26027.jpg",
  },
  {
    id: "6",
    codigo: "27004",
    nombre: "Camisa Julia",
    detalle: "",
    categoria: "blusa",
    precio: 1100,
    img: "./imagenes/27004.jpg",
  },
  {
    id: "7",
    codigo: "29001",
    nombre: "Camisa Rosali",
    detalle: "",
    categoria: "camisa",
    precio: 2000,
    img: "./imagenes/29001.jpg",
  },
  {
    id: "8",
    codigo: "29007",
    nombre: "Camisa Betina",
    detalle: "",
    categoria: "blusa",
    precio: 1900,
    img: "./imagenes/29007.jpg",
  },
  {
    id: "9",
    codigo: "29013",
    nombre: "Camisa Claudia",
    detalle: "",
    categoria: "blusa",
    precio: 1750,
    img: "./imagenes/29013.jpg",
  },
];

let contenedorProd = document.querySelector("#contenedorProductos");
//creo la variable para guardar carrito
let contenedorCarrito = document.querySelector("#contenedorCarrito");

/***********************
      FUNCIONES
 **********************/

//****PRODUCTOS****//
//funcion para mostrar los productos en cards

function mostrarProd(array) {
  contenedorProd.innerHTML = "";

  for (e of array) {
    contenedorProd.innerHTML += `
      <div class="card col-2" id="prod${e.id}">
          <img src="${e.img}" class="card-img-top" alt="${e.nombre}">
          <div class="card-body">
              <h5 class="card-title">${e.nombre}</h5>
              <p class="card-text" id="codigo">${e.codigo}</p>
              <h5 class="card-title">$ ${e.precio}</h5>
              <button class="btn btn-primary agrega" onclick="capturar(${e.id})">Agregar</button>
          </div>
      </div>
      `;
  }
}

// funcion que muestra como los productos que se agregan al carrito

function mostrarCarrito(array) {
  contenedorCarrito.innerHTML = "";
  for (e of array) {
    contenedorCarrito.innerHTML += `
          <tr class="item">
              <th scope="row">${e.idCarro}</th>
              <td>${e.codigo}</td>
              <td>${e.cantidad}</td>
              <td>$${e.precio}</td>
             
              <td><button class="btn btn-danger " onclick="quitar(${e.idCarro})">X</button></td>
          </tr>`;
  }
  contenedorCarrito.innerHTML += `
          <tr>
              <td class="text-center" colspan="3" >Total</td>
              <td colspan="2">$<span id="totalCarrito">0</span></td>
              
              
          </tr>
          <tr>
          <td class="text-center" colspan="4" ><button class="btn btn-primary agrega" onclick="capturar(${e.id})">Terminar Compra</button></td>
          
      </tr>
  `;
}

//funcion que agrega un producto- productos del carrito al storage
function agregarStorage(producto) {
  let lastItem = 0;

  let storage = localStorage.getItem("carrito")
    ? JSON.parse(localStorage.getItem("carrito"))
    : [];

  lastItem = storage.length;
  idCarrito = lastItem + 1;

  listaCarrito = new ProductoCarro(
    idCarrito,
    producto.codigo,
    1,
    producto.precio
  );

  storage.push(listaCarrito);
  return storage;
}

//funcion que guarda el carrito en el storage
function guardarStorage(array) {
  localStorage.setItem("carrito", JSON.stringify(array));
}

//funcion que muestra el carrito
function capturar(id) {
  let productoSeleccionado = productos.find((e) => e.id == id);
  guardarStorage(agregarStorage(productoSeleccionado));
  mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
  sumarProductos();
}

//funcion para sacar productos del carrito
function quitar(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  let carritoFinal = carrito.filter((e) => e.idCarro != id);
  
  renombrarId(carritoFinal);
  guardarStorage(carritoFinal);
  mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
  sumarProductos();

  




}

//funcion que reenumera los id de cada producto en el carrito
function renombrarId(listaCarrito) {
  lastItem = listaCarrito.length;
  for (let i = 0; i < listaCarrito.length; i++) {
    listaCarrito[i].idCarro = i+1;
   
  }
  return listaCarrito;
}




//genera el monto a pagar del carrito
function sumarProductos() {
  let suma = 0;
  let productosCarrito = JSON.parse(localStorage.getItem("carrito"));
  for (e of productosCarrito) {
    suma += e.precio;
  }
  let total = (document.querySelector("#totalCarrito").textContent = suma);
}


//jquery

$(() => {
  // inserta graficamente la prenda en el carrito

  $(".agrega").on("click", function () {
    
   $(this).parent().parent().animate(
      {
        left: "800px",
        opacity: "0",
      },
      "1000",
      function () {
        $(".card").animate({
          left: "0px",
          opacity: "1",
        });
        $("h1").text("");
      }
    );
    
   
  });

});





/***********************
      EVENTOS
 **********************/

//****PRODUCTOS****/
//evento que llama a los productos para armar las cards
mostrarProd(productos);

// llama la funcion para mostrar el carrito y el monto de compra
if (localStorage.getItem("carrito")) {
  mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
  sumarProductos(JSON.parse(localStorage.getItem("carrito")));
}
