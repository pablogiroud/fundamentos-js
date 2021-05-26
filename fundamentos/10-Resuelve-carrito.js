

//Listar productos

let carrito = ['BANANA', 'BICICLETA', 'HORNO', 'PARLANTES'];

function listarProductos(){
    
    //for(let i=0 < carrito.length; i++){
    //    console.log(`${i + 1} - ${carrito[1]}`);
    //}
    console.log("Productos del carrito");

    carrito.map(function(producto, index){
        console.log(`${index + 1} - ${producto}`);
        
    })
}

//listarProductos()


//agregar productos a la lista

/*
function agregarProductos(producto) {
    console.log(producto);
}

agregarProductos();

Opcional=
function agregarProducto(producto=prompt('Ingrese Producto')){
    console.log(producto);
}
agregarProducto();*/

function agregarProducto() {
    let producto = prompt('Ingrese un producto');
    /*primera forma
    if(producto){
        carrito.push(producto.toUpperCase());
    }*/
    while(producto){
        carrito.push(producto.trim().toUpperCase());
        producto = prompt('Ingrese un producto');
    }
    listarProductos();
}

// buscar productos
function buscarProductos(){
    let producto=prompt('Ingrese el producto que desea buscar');
    if(producto){
        let resultado = carrito.includes(producto.trim().toUpperCase())
        if (resultado){
            console.log(`El producto ${producto.trim().toUpperCase()} esta en el carrito`)
        }else{
            console.warn(`El producto ${producto.trim().toUpperCase()} NO esta en el carrito`)
        }
    }else{
        console.error('No se ingreso un procuto o cancelo el programa')
    }
    
}

//filtro

function filtrarProductos() {
    let producto=prompt('Ingrese el producto o palabra');
    if(producto){
        let productos = carrito.filter(function(produc){
            return produc.indexOf(producto.trim().toUpperCase()) >-1;
        })
        //console.log(productos)
        if(productos.length > 0){
            return productos;
        }else{
            console.error('No se encontro ningun producto con esa busqueda');
        }
    }else{
        console.error('Campo vacio o cancelado')
    }
}

//eliminar producto del carrito

function eliminarProducto() {
    console.log(carrito);
    let pos=prompt('Ingrese el numero del producto a eliminar')
    if(pos){
        pos=parseInt(pos);
        let producto=carrito[pos-1];
        if(producto!==undefined){
            let validar=confirm(`esta seguro que quiere eliminar ${producto}`);
            if(validar){
            carrito.splice(pos-1,1);
            console.log(`El producto ${producto} se ha eliminado`);
            }else{
                console.log('te caga pa eliminar');
            }
        }else{
            console.error('No hay producto con esa posicion')
        }
    }else{
        console.error('Ocurrio un error y no es posible realizar la accion solicitada')
    }
    console.log(carrito)
}