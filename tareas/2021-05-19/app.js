/*
Tarea1:
Definir una función que muestre información sobre una cadena de texto que
 se le pasa como argumento. A partir de la cadena que se le pasa, la función 
 determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o 
 por una mezcla de ambas.
*/

function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{
    return letra === letra.toLowerCase();
}   

function defineMayMin(miPalabra = prompt("Ingrese la cadena de texto.")) {

    let letraActual="";
    let cantMay = 0;
    let CantMin = 0;

    for(let index = 0; index < miPalabra.length; index++)
    {
        letraActual = miPalabra.charAt(index);
        if(esMayuscula(letraActual))
        {
            cantMay++;
        }

        if(esMinuscula(letraActual))
        {
            CantMin++;
        }       
    }

    if (miPalabra.length==cantMay)
    {
        console.log("La palabra tiene todas letras mayusculas");
    }else if (miPalabra.length==CantMin)
    {
        console.log("La palabra tiene todas letras minusculas");
    } else {
        console.log("La palabra contiene mayusculas y minusculas");
    }
}


/*Tarea 2
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/
let num = 0;

function parImpar(num=prompt('Ingrese un numero entero para definir si es par o ipmar')) {
    if(isNaN(num)){
        console.log('Es necesario que sea un numero');
        parImpar();
    }
    else if (num != null){
        num = parseInt(num);
        if((num % 2) == 0){
            console.log('El numero es par')
        }else{
            console.log('El numero es impar')
        }
    }else{
        console.log('Cancelaste la operacion')
    }
}


