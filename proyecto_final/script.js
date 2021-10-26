class Producto {
  constructor(codigo, titulo, categoria, precio, descripcion, stock) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.categoria = categoria;
    this.precio = precio;
    this.descripcion = descripcion;
    this.stock = stock;

    this.productoAgregado = () => {
      console.log("el producto " + this.titulo + " fue agregado con exito");
    };
    this.ingresoStock = (valor) => {
      this.stock = this.stock + valor;
      console.log(
        "ingresaste " + valor + " al stock del producto " + this.codigo
      );
      return this.stock;
    };
    this.venta = (cantidad) => {
      this.stock = this.stock - cantidad;
      precioTotal = cantidad * this.precio;
      return precioTotal;
    };
  }
}
let listaProductos = [];
const crearProducto = () => {
  let codigoProducto = prompt("ingrese el codigo del producto");
  let tituloProducto = prompt("ingrese el titulo del producto");
  let categoriaProducto = prompt("ingrese la categoria del producto");
  let precioProducto = parseFloat(prompt("ingrese el precio del producto"));
  let descripcionProducto = prompt("ingrese una descripcion del producto");
  let stockProducto = 0;

  let producto = new Producto(
    codigoProducto,
    tituloProducto,
    categoriaProducto,
    precioProducto,
    descripcionProducto,
    stockProducto
  );
  listaProductos.push(producto);
};


console.log(listaProductos);

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
ordenar("mayor");
console.log(listaProductos);

let buscaPorPrecio = listaProductos.filter(obj => obj.precio < 1200);
console.log(buscaPorPrecio);
