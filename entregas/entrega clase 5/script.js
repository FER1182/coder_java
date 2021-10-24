class Producto {
  constructor(codigo, titulo, categoria, precio, descripcion, stock) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.categoria = categoria;
    this.precio = precio;
    this.descripcion = descripcion;
    this.stock = stock;

    productoAgregado = () => {
      console.log("el producto " + this.titulo + "fue agregado con exito");
      return "";
    };
    ingresoStock = (valor) => {
      this.stock = this.stock + valor;
      console.log(
        "ingresaste" + valor + " al stock del producto " + this.stock
        
      );
      return(this.stock);
    };
    venta = (cantidad) => {
      this.stock = this.stock - cantidad;
      precioTotal = cantidad * this.precio;
      return precioTotal;
    };
  }
}

const crearProducto=()=> {
  let codigoProducto = prompt("ingrese el codigo del producto");
  let tituloProducto = prompt("imgrese el titulo del producto");
  let categoriaProducto = prompt("ingrese la categoria del producto");
  let precioProducto = parseFloat(prompt("ingrese el precio del producto"));
  let descripcionProducto = prompt("ingrese una descripcion del producto");
  let stockProducto = 0;

  let producto1 = new Producto(
    codigoProducto,
    tituloProducto,
    categoriaProducto,
    precioProducto,
    descripcionProducto,
    stockProducto 

  );
  console.log(crearProducto());
  console.log(producto1.productoAgregado());
  console.log(producto1.ingresoStock(10));
};


