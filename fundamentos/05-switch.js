// Estructura condicional
// Switch

let numero = 3

switch(numero) {
    case 10:
        //accion
        console.log('El numero es 10');
        break;
    case 25:
        //accion
        console.log('El numero es 25');
        break;
    case 3:
        //accion
        console.log('El numero es 3');
        break;
    default:
        console.log('El numero es de otro valor')
        //accion
        break;
}


//Switch dates
let diaNumero = new Date().getDa()

switch (diaNumero){
    case 0:
        console.log('Hoy es Domingo');
        break;
    case 1:
        console.log('Hoy es Lunes');
        break;
    case 2:
        console.log('Hoy es Martes');
        break;
    case 3:
        console.log('Hoy es Miercoles');
        break;
    case 4:
        console.log('Hoy es Jueves');
        break;
    case 5:
        console.log('Hoy es Viernes');
        break;
    default:
        console.log('Hoy es Sabado');
        break;
}

//Switch true false

let num3 = 24

switch (true){
    case num3 === 10:
        console.log('El numero es igual a 10');
        break;
    case num3 % 2 === 0:
        console.log('El numero es par');
        break;
    default:
        console.log('No se que mas hacer');
        break;
}


// Switch con comando por variable

let comando=prompt('Ingrese un comando (alerta, consola, print)')

switch (comando){
    case 'alerta':
        console.log('Usando switch en un alert');
        break;
    case 'consola':
        console.log('Usando switch en la consola');
        break;
    case 'print':
        document.write('Usando switch en el navegador');
        break;
    default:
        console.error('No existe ese comando');
        break;
}