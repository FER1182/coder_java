//variables

const usuario = document.querySelector("#usuario");
const mail = document.querySelector("#email");
const pasatiempo = document.querySelector("#pasatiempos");
const leer = document.querySelector("#leer");
const libro = document.querySelector("#libro");
const furbol = document.querySelector("#futbol");
const equipo = document.querySelector("#equipo");
const netflix = document.querySelector("#netflix");
const serie = document.querySelector("#serie");
const maraton = document.querySelector("#maraton");
const medallas = document.querySelector("#medallas");

const enviar = document.querySelector("#btn");
const formulario = document.querySelector("#formulario");

//funciones
//1-error

const showError = (input, mensaje) => {
  const formField = input.parentElement;

  formField.classList.remove("valido");
  formField.classList.add("error"); //modifica las clases

  const error = formField.querySelector("small"); //busca solo en los hijos
  error.textContent = mensaje;

  //javascript snipets
};
//2-validez

const showValido = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("valido"); //modifica las clases

  const error = formField.querySelector("small"); //busca solo en los hijos
  error.textContent = "";

  //javascript snipets
};

const checkUsuario = () => {
  let valido = false;
  const min = 6;
  const max = 15;
  const username = usuario.value.trim();

  if (username == "") {
    showError(usuario, "el usuario no puede estar vacio");
  } else if (username.length < min || username.length > max) {
    showError(
      usuario,
      `el usuario tiene que tener entre ${min} y ${max} caracteres`
    );
  } else {
    showValido(usuario);
    valido = true;
  }
  return valido;
};

usuario.onchange = () => {
  checkUsuario();
};

const elegirPasatiempo=()=>{
    const pasatiemposElegido=pasatiempo.value;
    switch(pasatiemposElegido){
        case '1':
            leer.style.display ="block";
            break;
        case '2':
            futbol    
    }
}