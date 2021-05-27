//funciones
//tareas

//funciones declarativas
function miFuncion(){
    console.log('hola Mundo');
}
miFuncion()

//define dos parametros
let num1=34;
let num2=56;

//la funcion recibe dos parametros, x e y. Los cuales podrian ser cualquier nombre
function sumar(x,y){
    console.log(x + y);
}
//ejecuto la funcion utilizando los parametros definidos previamente
sumar(num1,num2)

/*//ejercicio calculadora
function calculadora(num1, num2, operacion){
    if(!num1 || !num2){
        return 'Falta el valor';
    }
    switch(operacion){
        case '+':
            return num1 + num2;
        case '-':
            return num1 + num2;
        case '*':
            return num1 + num2;
        case '/':
            return num1 + num2;
        default:
            return 'Respuesta invalida';
    }
}*/

function calculadora(num1=0, num2=0, operacion='+'){
    if(!num1 || !num2){
        return 'Falta el valor';

    }

    switch(operacion){
        case '+':
            return num1 + num2;
        case '-':
            return num1 + num2;
        case '*':
            return num1 + num2;
        case '/':
            return num1 + num2;
        default:
            return 'Respuesta invalida';
    }
}

//funcion cubo
function cubo(num){
    return Math.pow(num,3);
}

//funcion con array
let numeros=[23,45,2,67]
function converCubo(array){
    let numerosAlCubo=[];
    //for of
    for(let numero of array){
        numerosAlCubo.push(cubo(numero));
    }
    return numerosAlCubo;
}

//scope-------------

let heroe = 'Superman';

function saludarHeroe() {
    heroe = 'Batman';
    return heroe;
    //console.log(`Bienvenido ${heroe}`);    
}



//funciones anonimas
const saludar = function(){
    console.log('Hola Pibes')
}

console.log(saludar())


