let num=10

if (num % 2 === 0){
    //accion
    console.log('El numero es par')
}
else{
    //otra accion
    console.warn('El numero no es par')
}


if (num === 10){
    console.log('El numero es igual a 10');
}
else if (num>10){
    console.log('El numero es mayor que 10');
}
else {
    console.log('El numero es menor que 10');
}

//

let num2 = parseInt(prompt('Ingrese un numero'));

if (isNaN(num2)){
    console.log('Ingrese un numero');
}
else {
    if (num2==10){
        console.log('El numero es igual a 10');
        }
    else if (num2>10){
        console.log('El numero es mayor que 10');
        }
    else if (num2 !== 10){
        console.log(`El valor ${num2} es distinto de 10`);
        }
    else {
        console.log('El numero es menor que 10');
    }
}


// Fiesta
//Solo puede entrar un mayor de edad osea edad >=18
//Si no es mayor de edad entonces debe ir acompa;ado de un tutor


let edad = 21
let tutor = false

if (edad >= 18){
    console.log('Puede ingresar a la fiesta');
}
else if ( tutor === true){
    console.log('Bienvenidos a la joda! no se separe de su tutor');
}
else{
    console.log('Salga de aqui, usted no puede disfrutar de la vida');
}

//otra forma
if (edad<18 && tutor===false){
    console.error('Salga de aqui, usted no puede disfrutar de la vida')
} else if (edad>=18 || tutor===true){
    console.log('Bienvenido a la joda!')
}
