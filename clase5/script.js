/*let nombre="lucky";
let tipo = "perro";
let dueno= "juan perez";
let edad = 2;
let castrado = false;
*/
/*
const mascota1 ={
  nombre: "lucy",
  tipo : "perro",
  dueno: {
    nombre: "juan",
    apellido : "perez",
    direccion : "cabildo 1240",
  },//objeto dentro de otro objeto
  edad : 2,
  castrado : false,

}

console.log(mascota1);

//2 maneeras de ver la propiedad nueva y vieja

console.log(mascota1["tipo"]);//forma vieja

console.log(mascota1.dueno);

console.log(mascota1.dueno.direccion);
*/
class Mascotas {
  constructor(nombre, tipo, dueno, edad, castrado,acumulado) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.dueno = dueno;
    this.edad = edad;
    this.castrado = castrado;
    this.acumulado=acumulado;

    bio = () => {
      console.log("esta mascota se llama" + this.nombre + "y tiene " + this.edad + " anos");
    }
    puntos=(valor)=>{
        let puntaje=valor*3;
        this.acumulado+=
        console.log("te ganaste" + puntaje + " puntos y tenes " + this.acumulado +" puntos acumulados");
    }

  }
}
/*
function Mascotas(nombre,tipo,dueno,edad,castrado){
  this.nombre=nombre;
  this.tipo=tipo;
  this.dueno=dueno;
  this.edad=edad;
  this.castrado=castrado; 
  this.bio=()=>{
      console.log("esta mascota se llama"+ this.nombre +"y tiene " + this.edad +" anos");
  };

}*/

const simba =new Mascotas("simba","gato","yael roufe",5,true);
console.log(simba);
const mila =new Mascotas("mila","perro","fulanito gonzales",3,false);
console.log(mila);
const otra =new Mascotas("simba","gato","yael roufe",5,true);

const crarMascota = () => {
  let nombreMascota=prompt("ingresa el nombre de tu mascota");
  let tipoMascota=prompt("que tipo de mascota es");
  let nombreDueno=prompt("como te llamas");
  let edadMascota=prompt("que edad tiene tu mascota");
  let estaCastrado=prompt("esta castrada?");
  
  const mascota2=new Mascotas(nombreMascota,tipoMascota,nombreDueno,edadMascota,estaCastrado);
  console.log(mascota2);
  console.log(mascota2.bio());

}