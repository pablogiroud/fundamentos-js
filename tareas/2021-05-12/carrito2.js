let carrito = [];


//Funcion ingresar producto al carrito
/*function crearCarrito(){
    let compra = [];
    let consulta = prompt('Desea seguir ingresando productos?\nIngrese la letra s para continuar');
    consulta = consulta.toUpperCase();
    if(consulta === 's'|| consulta === 'S'){ 
        while(consulta != null){
            let producto = prompt('Ingrese un producto');
            if(producto === null){
                alert('La operacion ha sido cancelada')
                break;
            }else if (producto === ''){
                alert('No se puede ingresar espacios vacios');
                break;
            }else{
                compra.push(producto);
                console.log(compra);
            }
        }
    }
    else{
        alert('La operacion ha finalizado');
    }
    carrito = carrito.concat(compra);
    return compra;
}



let consulta = prompt('Desea seguir ingresando productos?\nIngrese la letra s para continuar');
    consulta = consulta.toUpperCase();
    if(consulta === 's'|| consulta === 'S'){
    }else{
        alert('La operacion ha finalizado');
    }


*/
function crearCarrito(){
    let compra = [];
    while(compra){
        let producto = prompt('Ingrese un producto');
        if(producto === null){
            alert('La operacion ha sido cancelada');
            break;
        }else if (producto === ''){
            alert('No se puede ingresar espacios vacios');
            break;
        }else{
            compra.push(producto);
            console.log(compra);
        }
    }
    carrito = carrito.concat(compra);
    exce();
    return;
}

//funcion mostrar productos del carrito
function listarProductos(){
    if(carrito === null || carrito === ''){
        alert('el carrito esta vacio');
    }else{
        console.log(`Detalle del carrito ${carrito}`);
    }
    return;
}

//Buscar un producto en el carrito
function listarProducto() {
    if (carrito !== null){
        alert(`Sus productos son: ${carrito.join(' - ')}`)
        for (i of carrito) {
            contador = contador + 1;
            console.log(`${contador} - ${[i]}`);
        }
    }else{
        alert('El carrito esta vacio');
    }
    return;
}

//Buscar producto del carrito
function buscarProducto() {
    let buscar = prompt('¿Que producto está buscando en changuito?');
    while (buscar !== null) {
        if (carrito.includes(buscar) === true) {
            alert(`${buscar} se encuentra en la posicion ${(changuito.indexOf(buscar))+1}`);
            buscar = prompt('¿Desea buscar otro producto?');
        } else {
            alert('Ese producto no se encuentra en su changuito');
            buscar = prompt('¿Que producto está buscando?');
        }
    }
    alert('Indique si desea realizar alguna otra tarea');
    menu();
}

//funcion menu


function menu(opcion){
    switch(opcion){
        case '1':
            //agregarProductos();
            //total = total.concat(agregarProductos()); 
            crearCarrito();
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

function exce(){
    let opcion = prompt('Seleccione una opcion\n1. Agregar producto al carrito\n2. Listar los productos del carrito\n3. Buscar un producto en el carrito\n4. Eliminar producto del carrito');
    while(opcion != null){
        menu(opcion);
    }
    alert('Gracias por su visita!')
}