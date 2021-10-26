const mostrarMascotas = (nombre) => {
  
  if(localStorage.getItem("mascotas")!=null){
   const dato = JSON.parse(localStorage.getItem("mascotas"));
   const busqueda=dato.filter(obj=>obj.nombre==nombre);
   console.log(dato);
  }
};


