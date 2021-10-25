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
listaProductos.push(
  new Producto("27120", "camisa loly", "camias", 1500, "camisa manga larga")
);
listaProductos.push(
  new Producto("27100", "camisa juana", "camias", 1100, "camisa manga corta")
);
listaProductos.push(
  new Producto("27180", "camisa manta", "camias", 1300, "camisa sin manga")
);
listaProductos.push(
  new Producto(
    "27130",
    "camisa roland",
    "camias",
    1250,
    "camisa manga larga con puntilla"
  )
);
listaProductos.push(
  new Producto("27125", "camisa topa", "camias", 1550, "camisa manga ancha")
);
listaProductos.push(
  new Producto("27123", "camisa shura", "camias", 1900, "camisa manga 3/4")
);
listaProductos.push(
  new Producto(
    "27110",
    "camisa palm",
    "camias",
    1000,
    "camisa con cuello redondo"
  )
);

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

