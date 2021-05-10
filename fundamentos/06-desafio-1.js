/*- Realiza un script que pida cadenas de texto
hasta que se pulse “cancelar”.
Al salir con “cancelar” deben mostrarse todas las
cadenas concatenadas con un guión " - ".*/

let arreglo = [];

while (arreglo){
    let texto = prompt('ingrese un texto');
    if (texto === null){
            console.log(arreglo.join('-'));
            break;
        }
    else if(texto === ''){
            console.log('Tenes que ingresar algo!')
            continue;
        }
    else{
        arreglo.push(texto);
    }
}