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

