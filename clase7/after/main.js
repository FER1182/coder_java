let productos = JSON.parse(localStorage.getItem("lista"));

for (let producto of productos) {
    console.log(`El producto es ${producto.title} y su precio es ${producto.price}`);
}

// productos.forEach(producto => {
//     console.log(`El producto es ${producto.title} y su precio es ${producto.price}`);
// });

const buscar = (nombre) => {
    const dato = productos.find(e => e.title == nombre)
    console.log(dato);
    let comprar = confirm("Lo queres comprar?");
    console.log(comprar);
    if (comprar) {
        sessionStorage.setItem("carrito",JSON.stringify(dato));
        console.log(`Se agrego ${JSON.stringify(dato)} al carrito`);
    }
}