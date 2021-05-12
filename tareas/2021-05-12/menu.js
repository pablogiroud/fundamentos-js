let total = [];
let opcion = prompt('Seleccione una opcion\n1. Agregar producto al carrito\n2. Listar los productos del carrito\n3. Buscar un producto en el carrito\n4. Eliminar producto del carrito');

//funcion agregar productos al carritoalert('Carrito');
const agregarProductos = function(){ 
    let carrito = [];
    while (carrito){
        let agregar = prompt('Ingrese el producto');
        if(agregar === null){
            alert('La carga del carrito se ha cancelado')
            break;
        }else if(agregar === ''){
            alert('No se admiten campos vacios');
        }
        carrito.push(agregar);
        console.log(carrito);    
    }
    alert('Gracias por utilizar carrito');
    return;
}

//funcion mostrar carrito
function listarProductos(){
    if(carrito === null || carrito === ''){
        alert('el carrito esta vacio')
    }else{
        alert(`Detalle del carrito ${carrito}`);
    }
}

//funcion menu
function menu(opcion){
    switch(opcion){
        case '1':
            //agregarProductos();
            total = total.concat(agregarProductos()); 
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

//Buscar un producto en el carrito
//Eliminar producto del carrito

while(opcion != null){
    menu(opcion);
}
alert('Gracias por su visita!')
