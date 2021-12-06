const btnData = document.getElementById("btnData");
const containerData = document.getElementById("containerData");

//fetch archivo de text

/* const obtenerDatos = () => {
  fetch("textoPrueba.txt")
    .then((Response) => Response.text())
    .then((result) => 
    {
    console.log(result);
    containerData.innerHTML+=`<p>${result}</p>`
    
    })
    .catch((error)=>console.log(error));
};
 */

//fetch archivo json
const obtenerDatos = () => {
    fetch("usuarios.json")
      .then((Response) => Response.json())
      .then((result) => {
      
        result.forEach(user => {
            containerData.innerHTML+=`<p> usuario: nombre: ${user.nombre},apellido: ${user.apellido}, dni: ${user.dni}</p>`
            
        });
      
      })
      .catch((error)=>console.log(error));
  };
btnData.onclick = () => {
  obtenerDatos();
  //containerData.innerHTML="<p>Mis Datos </p>"
};
