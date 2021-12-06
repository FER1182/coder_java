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
//creo un array de los usuarios
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
}


//hacemos una tabla con los usuarios get
$(() => {
  const URL ="./usuarios.json";
/* 
  const request = new XMLHttpRequest();
  request.open('GET', URL);

  request.responseType = 'json';
  request.send();

  request.onload = function(){
      let i=1;
      $.get(URL,function(data,status){
          console.log(status);
          if(status==="success"){
              let datos=data;
              for(const item of datos){
                  $("#tablaUsuario").append(
                                  `
                     <tr>
                      <th scope="row">${i++}</th>
                      <td>${item.nombre}</td>
                      <td>${item.apellido}</td>
                      <td>${item.dni}</td>
                      <td>${item.mail}</td>
                      <td>${item.pass}</td>
                      
                    </tr>`
                  )
              }
          }
      })
  }
 */
  //agrega usuarios Post

/*   let datosPost={
    "nombre": "jorge",
    "apellido": "Palacios",
    "dni": "2930112021",
    "mail": "jorge301121@gmail.com",
    "pass": "123465678"
}
$("#btnPost").on("click",function(){
    $.post(URL,datosPost,function(data,status){
        alert(`el estado es ${status}`);
        console.log(`el nomreb es  ${data.nombre}`);
    })
}) */


$.post( URL, { "parametro1" : "valor1", "parametro2" : "valor2" }, null, "json" )
    .done(function( data, textStatus, jqXHR ) {
        if ( console && console.log ) {
            console.log( "La solicitud se ha completado correctamente." );
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado: " +  textStatus);
        }


      })

   
  });
/***********************
      EVENTOS
 **********************/
//****USUARIOS****/

//document.getElementById("btn").addEventListener("click", (e) => {
//e.preventDefault();
//guardar();

//});

//imprimirDatos();

