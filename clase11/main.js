console.log(document.getElementById("nombre"));
console.log(document.getElementsByClassName("heading2"));
console.log(document.querySelector("h1"));



//jquery

console.log($("#nombre"));
console.log($(".heading2"));
console.log($("h1"));


/* document.getElementById("btn").addEventListener("click",()=>{
    console.log("hola");
}) */


const elemento=document.createElement("p");
elemento.innerHTML="<h3>texto agregado</h3>";
document.getElementById("agregar").appendChild(elemento);

$("#agregar").append("<p>")


/* crear una tabla en html q tenga producto y precio
tomate 50
leche 35
yerba 100 

2.AGREGAR UN PRODUCTO POR JQUERY

3.PONER fondo gris al titulo

4.pintar filas impares de verde
*/