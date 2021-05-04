//Bucles

//While


//mientras condicion
//    entonces accion
/*
let vecesSumar = 10;
let totalSuma = 0;

while(vecesSumar>0){
    totalSuma += 1
    vecesSumar -= 1
    console.log(`totalSuma: ${totalSuma} | vecesSumar: ${vecesSumar}`)
}

console.log(`Total = ${totalSuma} `);
*/

//-------------------------------

let respuesta = 'ROMA';
let acierto = false;
let contador = 0;
let resp;

while (contador < 3 && acierto === false){
 
    let respUsuario = prompt(`Capital de Italia? tenes ${3 - contador} intentos`);

    if (respUsuario === null){
        document.write('Decidiste no contestar cagon!');
        resp = 'cancelar';
        break;
    }
    else if (respUsuario.toUpperCase() === ''){
        console.log('Vacio no sirve mamadera!')
    }
    else if (respUsuario.toUpperCase() === respuesta){
        acierto = true;
        console.log('Respuesta correcta!')
        }

    contador++

}

if (acierto === false && resp != 'cancelar') {
    document.write('Lo siento, no pegaste ni una!')
}