//Carrito
alert('Carrito');

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
    return carrito;
}

console.log(agregarProductos())