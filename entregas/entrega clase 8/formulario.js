//variables

const usuario = document.querySelector("#usuario");
const mail = document.querySelector("#email");
const pasatiempo = document.querySelector("#pasatiempos");


const enviar = document.querySelector("#btn");
const formulario = document.querySelector("#formulario");
const userok=document.querySelector("#userok");
//funciones
//1-error

const showError = (input, mensaje) => {
  const formField = input.parentElement;

  formField.classList.remove("valido");
  formField.classList.add("error"); //modifica las clases

  const error = formField.querySelector("small"); //busca solo en los hijos
  error.textContent = mensaje;

  
};
//2-validez

const showValido = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("valido"); //modifica las clases

  const error = formField.querySelector("small"); //busca solo en los hijos
  error.textContent = "el usuario es correcto";
  let titulo=document.createElement("h3");
  titulo.innerHTML=`hola ${usuario.value} como estas`;
  document.getElementById("userok").appendChild(titulo);
  
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

