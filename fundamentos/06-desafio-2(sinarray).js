//revisar while y enfocar en no utilizar el arreglo.

let numero = prompt('ingrese un numero');
let total = 0;

while (numero != null){
    if (isNaN(numero) || numero === ''){
        alert('Chango tiene que ser un numero');
    }
    else if(numero === null){
            console.log('Decidiste cancelar la cuestion');
            break;
        }
    else {
        numero = parseFloat(numero);
        total = total+numero;
    }
}
console.log(`Este es el resultado: ${total}`);