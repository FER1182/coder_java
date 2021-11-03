const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#btn");

const escribir = () => {
  let texto = prompt("que queres escribir?");
  parrafo.textContent = texto;
};

//como escuchamos eventos
//1-selector de eventos(evento,funcion)

//boton.addEventListener("click",escribir);

//boton.addEventListener("click",()=>{escribir();})----en este puedo poner mas funciones

//2-forma reducida
/* boton.onclick=()=>{
    escribir();
} */

//3- en el html la puse comentada pero no es recomendable

//tipos de eventos
//eventos mecanicos no son de logica
//1-mouse

/* boton.addEventListener("mouseover",()=>{
    console.log("hola");
}) */

//2-los del teclado por ejemplo salir de un box
/* const texto = document.querySelector("#texto");
texto.onkeydown = () => {
  console.log(texto.value);
};
 */

//3-logica

texto.onchange = () => {
  console.log("el nuevo valor es " + texto.value);
};

const selector = document.querySelector("#selector");
selector.addEventListener("change", () => {
  console.log(selector.value);
});
    
boton.onclick = (e) => {
  e.preventDefault();
  console.log("hace submit");
};

const enlace = document.querySelector("#enlace");
enlace.onclick = (e) => {
  e.preventDefault();
  enlace.style.color = "red";
};
