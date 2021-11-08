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
      this.listaNegra = true;
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


//creo un array de productos
let listaProductos = [];
let usuarios=[];

/***********************
      FUNCIONES
 **********************/

const crearUsuario = () => {
  
  let nombre = document.querySelector("#nombre").value;
  let nombre = document.querySelector("#apellido").value;
  let dni = document.querySelector("#dni").value;
  let mail = document.querySelector("#mail").value;
  let pass = document.querySelector("#pass").value;

  const usuario = new Usuario(nombre, apellido,dni, mail, pass);
  
  let listaUsuarios;

  if (localStorage.getItem("listaUsuarios") != null) {
    lista = JSON.parse(localStorage.getItem("listaUsuarios"));
    lista.push(usuario);
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  }
  listaUsuarios.push(usuario);

  return usuario;
  
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


console.log(listaProductos);
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


/***********************
      EVENTOS
 **********************/
ordenar("mayor");
console.log(listaProductos);

//busca los productos que cumplan la condicion  de que el precio sea menor a 1200

let buscaPorPrecio = listaProductos.filter(obj => obj.precio < 1200);
console.log(buscaPorPrecio);
