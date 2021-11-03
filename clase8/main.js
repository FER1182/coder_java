// por id

console.log(document.getElementById("unico"));

// por class

console.log(document.getElementsByClassName("parrafo"));

// por etiqueta

console.log(document.getElementsByTagName("p"));

console.log(document.getElementsByTagName("p")[2]);

//cambiar el contenido
document.getElementsByTagName("p")[2].textContent =
  "a este parrafo le cambie el contenido por js";

//por selector

console.log(document.querySelector("p")); //queryselecto siempre trae uno solo

console.log(document.querySelectorAll("p"));
//si quiero traer la clase
console.log(document.querySelectorAll(".parrafo"));
//si quiero por id
console.log(document.querySelectorAll("#unico"));

document.querySelector("#unico").style.color = "red";

document.querySelector("#unico").style.display = "none";

//document.querySelector("div").innerHTML="<a href=''>enlace 2</a>"; //inner cambia todo lo que hay adentro por lo q agrego


document.querySelector("#unico").setAttribute("class","parrafo-unico");//toma 2 parametro el nombre del atributo

let listaElementos =document.querySelectorAll("li");

/* for (elemento of listaElementos){
    console.log(elemento.innerHTML);
} */

listaElementos.forEach(el=>{
    console.log(el.innerHTML); 
})




let titulo =document.createElement("h2");
titulo.setAttribute("class","tituloNuevo");
//titulo.innerHTML="<a href='>titulo nuevo </a>";//puedo  agregarle html tags
titulo.textContent="titulo nuevo"//solamente agrega texto

console.log(titulo); 

document.getElementById("agregado").appendChild(titulo);

document.getElementById("agregado").removeChild(titulo);

class Mascotas {
  constructor(nombre, tipo, edad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;
  }
}

const listaMascotas = [];

const nuevaMascota = () => {
  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;
  const edad = Number(document.getElementById("edad").value);

  const mascota = new Mascotas(nombre, tipo, edad);

  if (localStorage.getItem("mascotas") == null) {
    listaMascotas.push(mascota);
    localStorage.setItem("mascotas", JSON.stringify(listaMascotas));
  } else {
    let listaNueva = JSON.parse(localStorage.getItem("mascotas"));
    listaNueva.push(mascota);

    //listaMascotas.push(mascota);
    localStorage.setItem("mascotas", JSON.stringify(listaNueva));
  }
}

let listaProductos = [{
  "title": "Brown eggs",
  "type": "dairy",
  "description": "Raw organic brown eggs in a basket",
  "filename": "0.jpg",
  "height": 600,
  "width": 400,
  "price": 28.1,
  "rating": 4
}, {
  "title": "Sweet fresh stawberry",
  "type": "fruit",
  "description": "Sweet fresh stawberry on the wooden table",
  "filename": "1.jpg",
  "height": 450,
  "width": 299,
  "price": 29.45,
  "rating": 4
}, {
  "title": "Asparagus",
  "type": "vegetable",
  "description": "Asparagus with ham on the wooden table",
  "filename": "2.jpg",
  "height": 450,
  "width": 299,
  "price": 18.95,
  "rating": 3
}, {
  "title": "Green smoothie",
  "type": "dairy",
  "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
  "filename": "3.jpg",
  "height": 600,
  "width": 399,
  "price": 17.68,
  "rating": 4
}, {
  "title": "Raw legums",
  "type": "vegetable",
  "description": "Raw legums on the wooden table",
  "filename": "4.jpg",
  "height": 450,
  "width": 299,
  "price": 17.11,
  "rating": 2
}, {
  "title": "Baking cake",
  "type": "dairy",
  "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
  "filename": "5.jpg",
  "height": 450,
  "width": 675,
  "price": 11.14,
  "rating": 4
}];

listaProductos.forEach(el => {
  /* let nodo= document.createElement("li");
  nodo.innerHTML = `el producto es ${el.title} su descripcion es ${el.description} y su precio es ${el.price}`;
  document.getElementById("listaProductos").appendChild(nodo);
 */

  let titulo=document.createElement("h3");
  titulo.innerHTML=el.title;
  document.getElementById("listaProductos").appendChild(titulo);

  let imagen=document.createElement("img");
  imagen.setAttribute("src",el.filename);
  document.getElementById("listaProductos").appendChild(imagen);

});