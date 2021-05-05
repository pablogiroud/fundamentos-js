/*Tarea 1 - Números con condicionales

Ingresan dos números
Si el primero es mayor que el segundo mostrar en consola la suma de ambos
Si el primero es menor que el segundo mostrar en consola la resta del segundo menos el primero.
Si son iguales mostrar en consola la multiplicación de ambos.
ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3 
*/

//version simple:

let num1 = prompt('Ingresa un numero');
let num2 = prompt('Ingresa otro numero');
if(num1 === null || num1 === ''){
    console.log('no ingresaste un numero, again');
} else if(num2 === null || num2 === ''){
    console.log('no ingresaste un numero, empecemos de nuevo');
} else {
    if(num1 > num2){
        result = parseInt(num1) + parseInt(num2);
        console.log(`${num1} es mayor que ${num2}, la suma de ambos es ${result}`);
        num1a = false;
        num2a = false
    } else if(num1 < num2){
        result = parseInt(num2) - parseInt(num1);
        console.log(`${num1} es menor que ${num2}, la diferencia entre ambos es ${num2-num1}`);
        num1a = false;
        num2a = false
    } else {
        console.log(`Los numeros ingresados: ${num1} y ${num2}, son iguales.`)
    }
}



/*
//Version mejorada incompleta
considere
1. iteracion o vueltas
2. clic cancelar
3. ingresar vacios:


intento = 0

while (intento < 10){

    let num1 = prompt('Ingresa un numero');
    if(num1 === ''){
        console.log('es necesario que ingreses un numero');
        if(num1 === null){
            console.log('se vemo!');
            break;
        }
        continue;
    }
    else{
        let num2 = prompt('Ingresa otro numero');
        if(num1 === ''){
            console.log('es necesario que ingreses un numero');
            if(num1 === null){
                console.log('se vemo!');
                break;
            }
            continue;
        }else{
            if(num1 > num2){
                result = parseInt(num1) + parseInt(num2);
                console.log(`${num1} es mayor que ${num2}, la suma de ambos es ${result}`);
                num1a = false;
                num2a = false
            } else if(num1 < num2){
                result = parseInt(num2) - parseInt(num1);
                console.log(`${num1} es menor que ${num2}, la diferencia entre ambos es ${num2-num1}`);
                num1a = false;
                num2a = false
            } else {
                console.log(`Los numeros ingresados: ${num1} y ${num2}, son iguales.`)
            }
        }
    } 
    intento++
}
console.log('Se terminaron los intentos por hoy')
*/