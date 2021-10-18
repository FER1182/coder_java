
let nombre=prompt("Nombre");
let apellido=prompt("Apellido");
let anioNacimiento=prompt("En que año naciste");
let anioActual=prompt("En que año estamos");
let nacionalidad=prompt("sos argentino? (poner si o no en minuscula)")
let edad=parseInt(anioActual)-parseInt(anioNacimiento);


if(edad>18 && nacionalidad=="si"){
    alert("hola "+nombre+" "+apellido+ " sos Argentino y mayor de edad");
}else if(edad>18){
    alert("hola "+nombre+" "+apellido+ " sos mayor de edad y no sos Argentino");
}else if(nacionalidad=="si"){
    alert("hola "+nombre+" "+apellido+ " sos Argentino y menor de edad");
}else{
    alert("hola "+nombre+" "+apellido+ " no sos Argentino y menor de edad")
}