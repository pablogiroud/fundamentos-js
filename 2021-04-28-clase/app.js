//Redondear un numero mas bajo
console.log(Math.floor(45.89));

//Redondear numero mas arriba
console.log(Math.round(45.89));

//Obtener el maximo de una lista de numeros
console.log(`El numero maximo es: ${ Math.max(56.55,45,90,5)}`)

//Obtener el minimo
console.log(`El numero minimo es: ${ Math.min(56.55,45,90,5)}`)


//obtener entero
let numero =  67.876533
console.log(parseInt(numero));
let decimal = "456.322456";
console.log(parseFloat(decimal));

let base=numero

let exponente=3

console.log(`EL numero ${base} elevado a la potencia ${exponente} es de ${Math.pow(base, exponente)}`);


//Calcular raiz cuadrada
console.log(Math.sqrt(64));

//obtener un numero aleatorio
console.log(Math.random());
console.log(Math.round(Math.random()) * 10);

//Obtener dos ceimales
decimal = parseFloat(decimal)

console.log(Math.round(decimal * 100)/100)