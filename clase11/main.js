console.log(document.getElementById("nombre"));
console.log(document.getElementsByClassName("heading2"));
console.log(document.querySelector("h1"));

//jquery

console.log($("#nombre,h2"));
console.log($(".heading2"));
console.log($("h1"));
console.log($(".div p.primero"));
console.log($(".div p:first-child"));
/*  document.getElementById("btn").addEventListener("click",()=>{
    console.log("hola");
})  */

const elemento = document.createElement("p");
//elemento.textContent="texto agregado";
elemento.innerHTML = "<h3>texto agregado</h3>";
document.getElementById("agregar").appendChild(elemento);
let mensaje = "hola como estas";

//$("#agregar").append("<p>aca agrego jquery</p>");
$("#agregar").append(`mi variable es ${mensaje}`);

if ($("#texto").value == "Yael") {
  //codigo
}

for (i = 0; i < $("#texto").length; i++) {
  //codigo
}

$(".div p").each(() => {
    console.log("hola");
});

/* crear una tabla en html q tenga producto y precio
tomate 50
leche 35
yerba 100 

2.AGREGAR UN PRODUCTO POR JQUERY

3.PONER fondo gris al titulo

4.pintar filas impares de verde
*/
