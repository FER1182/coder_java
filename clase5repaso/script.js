/*
consigna

1
crear una clase con un constructuro para productos
que acepte nombre categoria precio stock

2
crear un metodo que aplique un 10% de descuento si el precio es mayor a 10.000
y del 5% menor a 10000

3
crear un metodo que se llame comprar 
y que acepte cantidad como parametro 
este metodo actualiza el stock y me diga cuantos quedan


*/

class Productos {
  constructor(nombre, categoria, precio, stock) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }

  calcularDescuento() {
    if (this.precio > 10000) {
      this.precio = this.precio * 0.9;
      console.log("el precio final es de " + this.precio);
    } else {
      this.precio = this.precio * 0.95;
      console.log("el precio final es de " + this.precio);
    }
  }
  comprar(cantidad) {
    if (this.stock > cantidad) {
      this.stock = this.stock - cantidad;
      console.log("compraste " + cantidad + " . quedan " + this.stock);
      let precioFinal = this.precio * cantidad;
      console.log("el precio final es " + precioFinal);
    } else {
      console.log("no hay suficientes, solo quedan " + this.stock);
    }
    this.stock = this.stock - cantidad;
    console.log("compraste " + cantidad + " . quedan " + this.stock);
  }
}

const heladera = new Productos("heladera", "electro", 10500, 10);
const lavarropas = new Productos("lavarropas", "electro", 5000, 10);
console.log(heladera);
console.log(lavarropas);
console.log(heladera.calcularDescuento());
