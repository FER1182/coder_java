/***********************
  ENTIDADES/ LAS CLASES
 **********************/
  class Usuario {
    constructor(nombre, apellido,dni, mail, pass) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.dni=dni;
      this.mail=mail;
      this.pass=pass;

    }
  }

class Producto {
  //crea el objeto del producto
  constructor(codigo, titulo, categoria, precio, descripcion, stock) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.categoria = categoria;
    this.precio = precio;
    this.descripcion = descripcion;
    this.stock = stock;
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

/***********************
      VARIABLES
 **********************/
//creo un array de los usuarios
let usuarios=[];

//creo un array de productos
const productos=[
  {id:"1", nombre:"Camisa Square", detalle:"", categoria:"camisa", precio:100000, img:"./imagenes/pc1.jpg"},
  {id:"2", nombre:"Camisa Grecias", detalle:"", categoria:"hogar", precio:60000, img:"./imagenes/aire1.jpg"},
  {id:"3", nombre:"Camisa Sofi", detalle:"", categoria:"computacion", precio:120000, img:"./imagenes/notebook1.png"},
  {id:"4", nombre:"Camisa Maria", detalle:"", categoria:"computacion", precio:80000, img:"./imagenes/all-in-one.jpg"},
  {id:"5", nombre:"Camisa Sole", detalle:"", categoria:"computacion", precio:20000, img:"./imagenes/tablet.jpg"},
  {id:"6", nombre:"Camisa Julia", detalle:"", categoria:"computacion", precio:1000, img:"./imagenes/mouse.jpg"},
  {id:"7", nombre:"Camisa Rosa", detalle:"", categoria:"computacion", precio:2500, img:"./imagenes/teclado.jpg"},
  {id:"8", nombre:"Camisa Beti", detalle:"", categoria:"hogar", precio:90000, img:"./imagenes/heladera1.jpg"},
 
];

let contenedorProd=document.querySelector("#contenedorProductos");
//creo la variable para guardar carrito
let contenedorCarrito=document.querySelector("#contenedorCarrito");




/***********************
      FUNCIONES
 **********************/

//*****USUARIOS*******//

//funcion para crear usuario

const crearUsuario = () => {
  
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let dni = document.querySelector("#dni").value;
  let mail = document.querySelector("#mail").value;
  let pass = document.querySelector("#pass").value;

  const usuario = new Usuario(nombre, apellido,dni, mail, pass);
  
  let listaUsuarios;

  if (localStorage.getItem("listaUsuarios") != null) {
    listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    listaUsuarios.push(usuario);
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  }
  listaUsuarios.push(usuario);

  return usuario;
  
};


//agregar usuario
const agregarUsuario = (listaUsuarios) => {
  listaUsuarios.push(crearUsuario);
  return listaUsuarios;
};




//pido al usuario la informacion para crear el producto (cada propiedad del producto)
const crearProducto = () => {
  let codigoProducto = prompt("ingrese el codigo del producto");
  let tituloProducto = prompt("ingrese el titulo del producto");
  let categoriaProducto = prompt("ingrese la categoria del producto");
  
  //hago una validacion para que no deje poner un precio menor a cero
  let precioProducto=0;
  do{
  precioProducto = parseFloat(prompt("ingrese el precio del producto (tiene que ser mayor a cero)"));
  }while(precioProducto<0);

  let descripcionProducto = prompt("ingrese una descripcion del producto");
  let stockProducto = 0;

  //crea el producto nuevo apartir del Objetio Producto
  let producto = new Producto(
    codigoProducto,
    tituloProducto,
    categoriaProducto,
    precioProducto,
    descripcionProducto,
    stockProducto
  );

  //agregar el nuevo producto al final del array
  listaProductos.push(producto);
};



//ordena la informacion por codigo del producto 
ordenar = (forma) => {
  if (forma == "mayor") {
    listaProductos.sort((a, b) => {
      if (a.codigo > b.codigo) {
        return -1;
      }
      if (a.codigo < b.codigo) {
        return 1;
      }
      return 0;
    });
  } else {
    listaProductos.sort((a, b) => {
      if (a.codigo > b.codigo) {
        return 1;
      }
      if (a.codigo < b.codigo) {
        return -1;
      }
      return 0;
    });
  }
};


//****PRODUCTOS****//
//funcion para mostrar los productos en cards

function mostrarProd(array){
  contenedorProd.innerHTML="";
  for(e of array){
      contenedorProd.innerHTML+=`
      <div class="card col-2" style="width: 9rem;">
          <img src="${e.img}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${e.nombre}</h5>
              <p class="card-text">${e.detalle}</p>
              <h5 class="card-title">${e.precio}</h5>
              <button class="btn btn-primary" onclick="capturar(${e.id})">Agregar</button>
          </div>
      </div>
      `
  }
}

// funcion que muestra como los productos que se agregan al carrito

function mostrarCarrito(array){
  let i=1;
  contenedorCarrito.innerHTML="";
  for(e of array){
      contenedorCarrito.innerHTML+=`
          <tr>
              <th scope="row">${i++}</th>
              <td>${e.nombre}</td>
              <td>${e.detalle}</td>
              <td>${e.precio}</td>
              <td><button class="btn btn-danger" onclick="quitar(${e.id})">X</button></td>
          </tr>`        
  }
  contenedorCarrito.innerHTML+=`
          <tr>
              <td class="text-center" colspan="3" >Total</td>
              <td colspan="2">$<span id="totalCarrito">0</span></td>
          </tr>
  `

}

//funcion que agrega un producto productos del carrito al storage
function agregarStorage(producto){
  let storage= localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
  storage.push(producto);
  return storage;
}

//funcion que guarda el carrito en el storage
function guardarStorage(array){
  localStorage.setItem("carrito", JSON.stringify(array));
}

//funcion que muestra el carrito
function capturar(id){
  let productoSleccionado=productos.find(e=> e.id == id);
  guardarStorage(agregarStorage(productoSleccionado));
  mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
  sumarProductos();
}

function quitar(id){
  let carrito=JSON.parse(localStorage.getItem("carrito"));
  let carritoFinal=carrito.filter(e=> e.id != id);
  guardarStorage(carritoFinal);
  mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
  sumarProductos();
}

function sumarProductos(){    
  let suma = 0;
  let productosCarrito=JSON.parse(localStorage.getItem("carrito"))
  for( e of productosCarrito){          
      suma += e.precio        
  }    
  let total=document.querySelector("#totalCarrito").textContent=suma;    
}

function filtrar(array, dato){
  return array.filter(e=> e.categoria == dato);
}

/***********************
      EVENTOS
 **********************/


//****PRODUCTOS****/


//evento que llama a los productos para armar las cards
mostrarProd(productos);

if(localStorage.getItem("carrito")){
  mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
  sumarProductos(JSON.parse(localStorage.getItem("carrito")));
}

document.querySelector("#filtrar").addEventListener("change",(e)=>{    
  e.target.value !=" " ?  mostrarProd(filtrar(productos, e.target.value)) : mostrarProd(productos);
});