let arreglo = [];
let total = '';

while (arreglo != null){
    let numero = prompt('ingrese un numero');
    if (isNaN(numero) || numero === ''){
        alert('Chango tiene que ser un numero');
    }
    else if(numero === null){
            console.log('Decidiste cancelar la cuestion');
            break;
        }
    else {
    arreglo.push(numero);
    }
}
for(let i=0; i<arreglo.length; i++){
    total = arreglo.reduce((a, n) => (a + Number(n)), 0);
}
console.log(`Este es el resultado: ${total}`);