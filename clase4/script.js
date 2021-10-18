let num = parseInt(prompt("Ingresa un numero"));
let cubiculo=[];
for (let i = 0; i <= 4; i++) {
 
  cubiculo[i] = numeroAzar();
 }


 queSalio(cubiculo[0],cubiculo[1],cubiculo[2],cubiculo[3],cubiculo[4]);
alert("sacaste "+cubiculo[0]+" "+cubiculo[1]+" "+cubiculo[2]+" "+cubiculo[3]+" "+cubiculo[4]+" ")
function numeroAzar() {
  let min = 1;
  let max = 6;
  let numeroaz = min + Math.floor(Math.random() * (max - min + 1));
  alert(numeroaz);
  return numeroaz;
}
function queSalio(num1, num2, num3, num4, num5) {
  if (
    num1 == num2 &&
    num2 == num3 &&
    num3 == num4 &&
    num4 == num5 
  ) {
    alert(" GENERALA SERVIDA");
    return "ganaste";
  }else{
    alert("no sacaste generala");
    return "perdiste"
  }
}
/*
generala todo iguales
poker 4 iguales ;
full 3 iguales y 2 iguales;
escalera numeros seguidos;
*/