//let mensaje="bienvenidos a la clase 7";

//localStorage.setItem("clave","valor");
//localStorage.setItem("saludo",mensaje);


//console.log(mensaje);
/* console.log(localStorage.getItem("saludo"));

sessionStorage.setItem("temporal",2021);


for(i=0;i,localStorage.length;i++){
  let clave = localStorage.key(i);
  console.log("la clave es: "+ clave);
  console.log("el valor es: "+localStorage.getItem(clave));
}


localStorage.removeItem("clave");

localStorage.clear(); */

class Productos{
  constructor(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;

  }


}

let prod1=new Productos("pantalon",1500);
localStorage.setItem("producto",JSON.stringify(prod1));


let dato = JSON.parse(localStorage.getItem("producto"));
console.log(dato);
console.log(dato.nombre);
console.log(dato.precio);


