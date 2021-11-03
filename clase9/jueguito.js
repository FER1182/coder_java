const estadoJugador = {
  velocidad: 100,
  mostrar: true,
  top: 0,
  left: 0,
};

const keycodes = {
  izquierda: 37,
  derecha: 39,
  arriba: 38,
  abajo: 40,
};
const jugador = document.querySelector("#jugador");
const desaparecer = document.querySelector("#desaparecer");

desaparecer.onclick = () => {
  if (jugador.mostrar) {
    jugador.style.opacity = 0;
    jugador.mostrar = false;
  } else {
    jugador.style.opacity = 1;
    jugador.mostrar = true;
  }
};

const mover = (e) => {
  //ver q tecla apreto y segun eso mover
  switch (e.keyCode) {
    case keycodes.arriba:
      estadoJugador.top -= estadoJugador.velocidad;
      jugador.style.top = estadoJugador.top + "px";
      break;
    case keycodes.abajo:
      estadoJugador.top += estadoJugador.velocidad;
      jugador.style.top = estadoJugador.top + "px";
      break;
    case keycodes.izquierda:
      estadoJugador.left -= estadoJugador.velocidad;
      jugador.style.left = estadoJugador.left + "px";
      break;
    case keycodes.derecha:
      estadoJugador.left += estadoJugador.velocidad;
      jugador.style.left = estadoJugador.left + "px";
      break;
    default:
      alert("solo se pueden flechas");
      break;
  }
};

/* window.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
}); */
window.addEventListener("keydown",mover);