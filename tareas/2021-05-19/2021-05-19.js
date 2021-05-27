/*Ciudades
----------------------------------
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let cityArray = []; 

function saveCity(){
    let cityName = prompt('Ingrese el nombre de una ciudad');
    while (cityName !== null && cityName !== '0') {
        cityArray.push(cityName.trim().toUpperCase()); 
        cityName = prompt('Ingrese el nombre de una ciudad');
        }
    console.log(`El arreglo tiene una longitud de ${cityArray.length}`);
    document.write(`<br>La primer posicion del arreglo contiene ${cityArray[0]}, la tercer posicion contiene ${cityArray[2]}, y la ultima posicion contiene ${cityArray[cityArray.length-1]}<br>`);
    cityArray.push('Paris');
    document.write(`<br>Agregamos Paris al final de la lista: ${cityArray.join(' - ')}<br>`);
    document.write(`<br>El elemento que se encuentra en la segunda posicion es: ${cityArray[1]}<br>`);
    cityArray.splice(1, 0, 'Barcelona');
    document.write(`<br>Insertamos a Barcelona en el sedungo lugar: ${cityArray.join(' - ')}`);
}


/*Dados
---------

Escribir un script que simule el lanzamiento de dos dados.
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/



function dados() {
    let confirmacion = confirm('Presione aceptar para tirar los dados, o cancelar para finalizar la funcion');
    
    let numeros = [];
    let resultado = 0;
    let apariciones = [];

    while(confirmacion){
        for (let i = 1; i < 3; i++) {
            let tiro = Math.floor(Math.random() * (6 - 1)) + 1;
            console.log(`Dado ${i}: ${tiro} `);
            numeros.push(tiro)
            console.log(numeros)
            confirm('Presione aceptar para tirar los dados, o cancelar para finalizar la funcion');
        }
        numeros.forEach (function(numero){
            resultado += numero;
        });

        console.log(`La suma de los tiros es ${resultado}`);
        console.log('Gracias por tirar los dados!');
    }
    

}
