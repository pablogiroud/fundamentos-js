//Bucles

//While


//mientras condicion
//    entonces accion

let vecesSumar = 10;
let totalSuma = 0;

while(vecesSumar>0){
    totalSuma += 1
    vecesSumar -= 1
    console.log(`totalSuma: ${totalSuma} | vecesSumar: ${vecesSumar}`)
}

console.log(`Total = ${totalSuma} `);


//-------------------------------

let respuesta = 'HELSINKI';
let acierto = false;
let contador = 0

while (contador < 3 && acierto === false){
 
    let respUsuario = prompt('Capital de Finlandia')

    if (respUsuario.toUpperCase() === respuesta){
        acierto = true;
        console.log('Respuesta correcta!')
    }

    contador++

}

if (acierto === false) {
    document.write('Lo sentimos, no pegaste ni una!')
}