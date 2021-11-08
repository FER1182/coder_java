const productos=[
    {id:"1", nombre:"PC", detalle:"i5,500GB ssd", categoria:"computacion", precio:100000, img:"./imagenes/pc1.jpg"},
    {id:"2", nombre:"Aire", detalle:"Split 3000F", categoria:"hogar", precio:60000, img:"./imagenes/aire1.jpg"},
    {id:"3", nombre:"Notebook", detalle:"i3, 240GB ssd", categoria:"computacion", precio:120000, img:"./imagenes/notebook1.png"},
    {id:"4", nombre:"All-in-One", detalle:"i7, 500GB ssd", categoria:"computacion", precio:80000, img:"./imagenes/all-in-one.jpg"},
    {id:"5", nombre:"Tablet", detalle:"Android", categoria:"computacion", precio:20000, img:"./imagenes/tablet.jpg"},
    {id:"6", nombre:"Mouse", detalle:"Mouse optico", categoria:"computacion", precio:1000, img:"./imagenes/mouse.jpg"},
    {id:"7", nombre:"Teclado", detalle:"Teclado gamer", categoria:"computacion", precio:2500, img:"./imagenes/teclado.jpg"},
    {id:"8", nombre:"Heladera", detalle:"Heladera mediana", categoria:"hogar", precio:90000, img:"./imagenes/heladera1.jpg"},
    {id:"9", nombre:"Lavarropas", detalle:"Lavarropas automatico", categoria:"hogar", precio:45000, img:"./imagenes/lavarropas1.jpg"},
    {id:"10", nombre:"Monitor", detalle:"Monitor 19´", categoria:"computacion", precio:18000, img:"./imagenes/monitor1.jpg"},
    {id:"11", nombre:"Netbook", detalle:"Pentium, 120GB ssd", categoria:"computacion", precio:160000, img:"./imagenes/netbook.png"}
];

let contenedorProd=document.querySelector("#contenedorProductos");
let contenedorCarrito=document.querySelector("#contenedorCarrito");

function mostrarProd(array){
    contenedorProd.innerHTML="";
    for(e of array){
        contenedorProd.innerHTML+=`
        <div class="card col-2" style="width: 9rem;">
            <img src="${e.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${e.nombre}</h5>
                <p class="card-text">${e.detalle}</p>
                <h5 class="card-title">${e.precio}</h5>
                <button class="btn btn-primary" onclick="capturar(${e.id})">Agregar</button>
            </div>
        </div>
        `
    }
}

function mostrarCarrito(array){
    let i=1;
    contenedorCarrito.innerHTML="";
    for(e of array){
        contenedorCarrito.innerHTML+=`
            <tr>
                <th scope="row">${i++}</th>
                <td>${e.nombre}</td>
                <td>${e.detalle}</td>
                <td>${e.precio}</td>
                <td><button class="btn btn-danger" onclick="quitar(${e.id})">X</button></td>
            </tr>`        
    }
    contenedorCarrito.innerHTML+=`
            <tr>
                <td class="text-center" colspan="3" >Total</td>
                <td colspan="2">$<span id="totalCarrito">0</span></td>
            </tr>
    `

}
function agregarStorage(producto){
    let storage= localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
    storage.push(producto);
    return storage;
}
function guardarStorage(array){
    localStorage.setItem("carrito", JSON.stringify(array));
}

function capturar(id){
    let productoSleccionado=productos.find(e=> e.id == id);
    guardarStorage(agregarStorage(productoSleccionado));
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    sumarProductos();
}

function quitar(id){
    let carrito=JSON.parse(localStorage.getItem("carrito"));
    let carritoFinal=carrito.filter(e=> e.id != id);
    guardarStorage(carritoFinal);
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    sumarProductos();
}

function sumarProductos(){    
    let suma = 0;
    let productosCarrito=JSON.parse(localStorage.getItem("carrito"))
    for( e of productosCarrito){          
        suma += e.precio        
    }    
    let total=document.querySelector("#totalCarrito").textContent=suma;    
}

function filtrar(array, dato){
    return array.filter(e=> e.categoria == dato);
}

mostrarProd(productos);

if(localStorage.getItem("carrito")){
    mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
    sumarProductos(JSON.parse(localStorage.getItem("carrito")));
}

document.querySelector("#filtrar").addEventListener("change",(e)=>{    
    e.target.value !=" " ?  mostrarProd(filtrar(productos, e.target.value)) : mostrarProd(productos);
});