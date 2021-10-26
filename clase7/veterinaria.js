class Mascotas {
  constructor(nombre, tipo, edad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad;
  }
}

const listaMascotas = [];

const nuevaMascota = () => {
  const nombre = prompt("ingrese el nombre de su mascota");
  const tipo = prompt("que tipo de mascota es");
  const edad = Number(prompt("que edad tiene tu mascota"));

  const mascota = new Mascotas(nombre, tipo, edad);

  if (localStorage.getItem("mascotas") == null) {
    listaMascotas.push(mascota);
    localStorage.setItem("mascotas", JSON.stringify(listaMascotas));
  } else {
    let listaNueva = JSON.parse(localStorage.getItem("mascotas"));
    listaNueva.push(mascota);

    //listaMascotas.push(mascota);
    localStorage.setItem("mascotas", JSON.stringify(listaNueva));
  }
};
