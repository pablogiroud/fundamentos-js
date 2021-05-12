//Carrito
alert('Carrito');
let opcion = prompt('Seleccione una opcion\n1. Agregar producto al carrito\n2. Listar los productos del carrito\n3. Buscar un producto en el carrito\n4 Eliminar producto del carrito');
let carritofinal = '';
let carrito = [];

while(opcion != null){
    menu(opcion);
}
alert('Gracias por su visita!')


//funcion menu
function menu(opcion){
    switch(opcion){
        case '1':
            agregarProductos();
            break;
        case '2':
            listarProductos();
            break;
        case '3':
            buscarProducto();
            break;
        case '4':
            eliminarProducto();
            break;
        default:
            console.error('No existe ese comando');
            break;
    }
}

//funcion agregar productos al carrito
function agregarProductos(){
    let prod = [];
    while(prod){
        let elec = prompt('Ingrese un producto');
        if (isNaN(elec) || elec === ''){
            alert('respeta la consigna mamadera!');
        }else if (elec === null){
            console.log('Gracias! vuelva prontos');
            break;
        }else {
            prod = parseInt(elec);
            carrito.concat(prod);
        }
    }
    return carrito;
}

//funcion mostrar carrito
function listarProductos(){
    if(carrito === null || carrito === ''){
        console.log('el carrito esta vacio')
    }else{
        console.log(`Detalle del carrito ${carrito}`);
    }
}