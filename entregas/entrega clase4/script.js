let nombre = prompt("como te llamas");
let cubiculo = [];
//cubiculo[4]=1;


for (let i = 0; i <= 3; i++) {
  cubiculo[i] = numeroAzar();
}

queSalio(cubiculo[0], cubiculo[1], cubiculo[2], cubiculo[3], cubiculo[4]);
alert(
  nombre +
    " sacaste \n" +
    cubiculo[0] +
    "\n" +
    cubiculo[1] +
    "\n" +
    cubiculo[2] +
    "\n" +
    cubiculo[3] +
    "\n" +
    cubiculo[4] +
    " "
);
function numeroAzar() {
  let min = 1;
  let max = 6;
  let numeroaz = min + Math.floor(Math.random() * (max - min + 1));
  alert(numeroaz);
  return numeroaz;
}
function queSalio(num1, num2, num3, num4, num5) {
  if (
    compara(num1, num2) &&
    compara(num1, num3) &&
    compara(num1, num4) &&
    compara(num1, num5)
  ) {
    alert(" GENERALA SERVIDA");
    return "ganaste";
  } else if (
    (compara(num1, num2) && compara(num1, num3) && compara(num1, num4)) ||
    (compara(num1, num2) && compara(num1, num3) && compara(num1, num5)) ||
    (compara(num2, num3) && compara(num2, num4) && compara(num2, num5))
  ) {
    alert(" POKER SERVIDO");
    return "ganaste";
  } else {
    alert("no sacaste ni generala servida ni poker servido");
    return "perdiste";
  }
}

function compara(num1, num2) {
  if (num1 == num2) {
    return true;
  }
}
/*
generala todo iguales
poker 4 iguales ;
full 3 iguales y 2 iguales;
escalera numeros seguidos;
*/
