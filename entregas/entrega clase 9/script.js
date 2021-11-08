/***********************
  ENTIDADES/ LAS CLASES
 **********************/
  class Usuario {
    constructor(nombre, apellido,dni, mail, pass) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.dni=dni;
      this.mail=mail;
      this.pass=pass;

    }
  }



/***********************
      VARIABLES
 **********************/


//creo un array de productos

let usuarios=[];

/***********************
      FUNCIONES
 **********************/

//*****USUARIOS*******//

//funcion para crear usuario

const crearUsuario = () => {
  
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let dni = document.querySelector("#dni").value;
  let mail = document.querySelector("#mail").value;
  let pass = document.querySelector("#pass").value;

  const usuario = new Usuario(nombre, apellido,dni, mail, pass);
  
  let listaUsuarios;

  if (localStorage.getItem("usuarios") != null) {
    listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    listaUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
  usuarios.push(usuario);

  return usuario;
  
};
//verificacion de storage

const verificarSotarage = () => {
  let dato = [];
  if (localStorage.getItem("usuarios") != null) {
    dato = JSON.parse(localStorage.getItem("usuarios"));
    return dato;
  }
};


//agregar usuario
const agregarUsuario = (listaUsuarios) => {
  listaUsuarios.push(crearUsuario);
  return listaUsuarios;
};



//guardar

const guardar = () => {
  crearUsuario();
  if (verificarSotarage() != undefined) {
    localStorage.setItem("usuarios", JSON.stringify(verificarSotarage()));
  } else {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
};


//hacemos una tabla con los usuarios

const imprimirDatos = () => {
  let i=1;
  verificarSotarage().forEach(obj => {
    document.getElementById("tablaUsuario").innerHTML += `
        <tr>
          <th scope="row">${i++}</th>
          <td>${obj.nombre}</td>
          <td>${obj.apellido}</td>
          <td>${obj.dni}</td>
          <td>${obj.mail}</td>
          <td>${obj.pass}</td>
          
        </tr>`
        ;
  });
};

/***********************
      EVENTOS
 **********************/

document.getElementById("btn").addEventListener("click", (/*e*/) => {
  //e.preventDefault();
  guardar();
  
});

imprimirDatos();