/*
Tarea 2 - Operaciones con condicionales

Recibir dos valores y la operación a realizar (+, -, *, /)
Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0
Con una estructura switch verificar la operación y devolver un mensaje con el resultado de la misma.
Si se ingresa una operación que no está contemplada devolver un mensaje de error. 
*/

var val1 = parseInt(prompt('Ingrese un numero'))
var val2 = parseInt(prompt('Ingrese otro numero'))

if (isNaN(val1)){
    val1 = val1 || 0;
}
if(isNaN(val2)){
    val2 = val2 || 0;
}

let operacion = prompt('elija el tipo de OP')
switch(operacion) {
    case '+':
        console.log(`La suma de los numeros ingresados es ${parseInt(val1)+parseInt(val2)}`);
        break;
    case '-':
        console.log(`La diferencia entre los numeros ingresados es ${parseInt(val1)-parseInt(val2)}`);
        break;
    case '*':
        console.log(`La multiplicacion de los numeros ingresados es ${parseInt(val1)*parseInt(val2)}`);
        break;
    case '/':
        console.log(`La division entre los numeros ingresados es ${parseInt(val1)/parseInt(val2)}`);
        break;
    default:
        console.log('La op seleccionada no esta en nuestra lista');
        break;
}

console.log('Gracias por utilizar los servicios de la comision 9i')