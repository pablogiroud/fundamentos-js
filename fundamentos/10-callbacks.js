
//callbacks
//son funciones qeu se envian como parametros y se ejecutan despues de un metodo

let numeros2 = [8,5,4,16,24];

let numerosOrdenados = numeros2.sort(function (a,b){
    return a - b;
})


//filter
let pares = numeros2.filter(function(num) {
    return num % 2 === 0;
});


//find

let alumnos = ['Lucas', 'Pablo', 'Fbrizio', 'Jorge'];

let respuesta = alumnos.find(function(alumno){
    return alumno === 'Lucas';
});

//map

let numerosDobles = numeros2.map(function(num) {
   return num * 2; 
});