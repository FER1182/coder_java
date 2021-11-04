/***********************
      ENTIDADES/ LAS CLASES
 **********************/

class Residentes {
  constructor(dni, nombre, piso, depto) {
    this.dni=dni;
    this.nombre=nombre;
    this.piso=piso;
    this.depto=depto;
    this.listaNegra = true;
  }
}

/***********************
      VARIABLES
 **********************/

let listaPersonas = [];

/***********************
      FUNCIONES
 **********************/

//crear residente

const crearResidente = () => {
  let dni = document.querySelector("#dni").value;
  let nombre = document.querySelector("#nombre").value;
  let piso = document.querySelector("#piso").value;
  let depto = document.querySelector("#depto").value;

  const residente = new Residentes(dni, nombre, piso, depto);
  
  let lista;
  if (localStorage.getItem("listaPersonas") != null) {
    lista = JSON.parse(localStorage.getItem("listaPersonas"));
    lista.push(residente);
    localStorage.setItem("listaPersonas", JSON.stringify(lista));
  }
  listaPersonas.push(residente);

  return residente;
  
};

//verificacion de storage

const verificarSotarage = () => {
  let dato = [];
  if (localStorage.getItem("listaPersonas") != null) {
    dato = JSON.parse(localStorage.getItem("listaPersonas"));
    return dato;
  }
};

//agregar usuario
const agregarUsuario = (lista) => {
  lista.push(crearResidente);
  return lista;
};

//guardar

const guardar = () => {
  crearResidente();
  if (verificarSotarage() != undefined) {
    localStorage.setItem("listaPersonas", JSON.stringify(verificarSotarage()));
  } else {
    localStorage.setItem("listaPersonas", JSON.stringify(listaPersonas));
  }
};

//eliminar residente
const eliminarResidente=(dni)=>{
    let listaVieja=JSON.parse(localStorage.getItem("listaPersonas"));
    let listaNueva=listaVieja.filter(e=>e.dni !=dni);
    
    localStorage.setItem("listaPersonas",JSON.stringify(listaNueva));
    location.reload();
}

//imprimir la tabla

const imprimirDatos = () => {
  verificarSotarage().forEach(obj => {
    document.getElementById("table").innerHTML += `
            <tr>
                <td>${obj.dni}</td>
                <td>${obj.nombre}</td>
                <td>${obj.piso}</td>
                <td>${obj.depto}</td>
                <td>${obj.listaNegra}</td>
                <td><button onclick=eliminarResidente(${obj.dni})>X</button></td>      
            </tr>
        `;
  });
};

/***********************
      EVENTOS
 **********************/

document.getElementById("btnSave").addEventListener("click", (/*e*/) => {
  //e.preventDefault();
  guardar();
});

imprimirDatos();