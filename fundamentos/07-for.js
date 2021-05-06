//for
/*
for (let i=0; i<10; i++){
    console.log(i);
}
*/
//tarea
//ingresar la tabla que queremos calcular
//mostrar por consola latabla

/*
let tabla = parseInt(prompt('ingrese el numero de la tabala a calcular'));
if(isNaN(tabla)){
    console.error('Debe enviar un numero');
}
for(let i=1; i<=10; i++){
    // 2x1=2
    // 2x2=4
    console.log(`${tabla} x ${i} = ${tabla * i}`)
}
*/
/*
let tabla = prompt('ingrese el numero de la tabala a calcular');

while (tabla!==null || tabla!==''){
    for(let i=1; i<=10; i++){
        // 2x1=2
        // 2x2=4
        console.log(`${tabla} x ${i} = ${tabla * i}`)
    }
    tabla = parseInt(prompt('Ingrese el numero de la tabla calcular'))
}
*/

// Caso con opcion de entrar infinitos numeros
let tabla = parseInt(prompt('ingrese el numero de la tabala a calcular'));
while (tabla){
    for(let i=1; i<=10; i++){
        console.log(`${tabla} x ${i} = ${tabla * i}`)
    }
    tabla = parseInt(prompt('Ingrese el numero de la tabla calcular'));
}