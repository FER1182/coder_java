/*
let lista=["texto1","texto2",1,2,false,["texto2","texto3"],{nombre:"pepit",apellido:"lopez"}];

console.log(lista);
console.log(lista[1]);
console.log(lista[5][1]);
console.log(lista[6].nombre);

for (i = 0; i< array.length; i++) {
  let tipoDeDato=typeof lista[i];
  console.log(tipoDeDato);
  console.log("el elemento en la posicion " + i + " es "+ lista[i]);
  console.log(lista[i]);
}*/
/*
let listaSuper=["agua","sal","gaseosas","carne"];

console.log(listaSuper);
listaSuper.push("yerba");
console.log(listaSuper);
listaSuper.push("galletitas");
let agregarLista=prompt("que queres agregar a la lista");
listaSuper.push(agregarLista);
console.log(listaSuper);


listaSuper.sort();
console.log(listaSuper);

console.log(listaSuper.join("-"));

let listaPanaderia=["facturas","figacitas"];
let listaFinal=listaSuper.concat(listaPanaderia);

console.log(listaFinal);
*/

class Productos {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
let listaProductos = [];

function agregarProductos() {
  let nombreAgregado = prompt("que producto es?");
  let precioAgregado = parseFloat(prompt("cual es el precio?"));
  let producto = new Productos(nombreAgregado, precioAgregado);
  listaProductos.push(producto);
}

listaProductos.push(new Productos("queso", 50));
console.log(listaProductos);
