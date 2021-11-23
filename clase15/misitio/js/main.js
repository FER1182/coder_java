//EJEMPLO SPA PLANTILLA
const app = new ProductoController(new ProductoModel(),new ProductoView());
//crear array de ruta
//app.listar('#app');

const routes =[
    {path:'/home',action:'agregar'},
    {path:'/pagina1',action:'listar'},
    {path:'/pagina2',action:'buscar'},
    
];

//averiguamos donde estamos cual es la location
const parseLocation=()=>location.hash.slice(1).toLocaleLowerCase() || '/';

//buscamos en el array de rutas el location en el que estamos

const findActionByPath = (path) => routes.find(r => r.path == path || undefined);

//crear el ruteador 
const router = ()=>{
    //obtenemos ruta actual
    const path = parseLocation();
    console.log(path);
    const route = findActionByPath(path);// me da el objeto de mi ruta


    switch(route.action){
        case 'agregar':
            app.agregar('#app');
            break;
        case 'buscar':
            app.buscar('#app');
            break;
        case 'listar': 
            app.listar('#app'); 
            break;
        default:
            ErrorComponent('#app') ;
            break;     
                        
    }

}
$(window).on('load',function(){router()});

$(window).on('hashchange',function(){router()}); 