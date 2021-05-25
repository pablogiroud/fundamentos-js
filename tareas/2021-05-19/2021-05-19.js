/*Ciudades
----------------------------------
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el element
o que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let cityArray = []; 

function saveCity(){
    let cityName = prompt('Ingrese el nombre de una ciudad');
    while (cityName !== null && cityName !== '0') {
        cityArray.push(cityName.trim().toUpperCase()); 
        cityName = prompt('Ingrese el nombre de una ciudad');
        }
    console.log(`El arreglo tiene una longitud de ${cityArray.length}`);
    document.write(`La primer posicion del arreglo contiene ${cityArray[0]}, la tercer posicion contiene ${cityArray[2]}, y la ultima posicion contiene ${cityArray[cityArray.length-1]}`);
    let cityArray2 = cityArray2.push('Paris');
}



/*let ciudades = [];


function listaCiudades (){
    let ingresarCiudad= prompt ('Ingrese una ciudad, sino apriete "Cancelar"');

    while (ingresarCiudad !== null && ingresarCiudad !== '0'){
        ciudades.push (ingresarCiudad.trim().toUpperCase());
        
        ingresarCiudad= prompt ('Ingrese otra ciudad, sino apriete "Cancelar"');
    }
    console.log (`Las ciudades ingresadas son ${ciudades}`);

    console.log (`La cantidad de ciudades agregadas son ${ciudades.length}`);

    console.log (ciudades.splice (1,1, 'BARCELONA'));

    document.write (`La primera ciudad es ${ciudades[0]}, la tercera ciudad es ${ciudades[2]} y la última ciudad es ${ciudades[ciudades.length-1]}.`);

    document.write (`El elemento que ocupa la segunda posición es ${ciudades[1]}`);

    let sumarParis = ciudades.push ('PARIS');
    console.log (`Las ciudades son ${ciudades.join ('-')}`);
}*/


/*Dados
---------

Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/
