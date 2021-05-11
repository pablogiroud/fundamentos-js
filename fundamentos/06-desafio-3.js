//Realiza un script que cuente el número de vocales que tiene un texto y las muestre en pantalla.

let texto = prompt('Ingrese la palabra de la cual desea contar las vocales');
let vocales = 0;
let a = '';

for(let i=0; i<texto.length; i++){
    letra = texto.charAt(i)
    switch (letra){
        case 'a' || 'A' || 'á' || 'Á':
            vocales++;
            break;
        case 'e' || 'E' || 'é' || 'É':
            vocales++;
            break;
        case 'i' || 'I' || 'í' || 'Í':
            vocales++;
            break;
        case 'o' || 'O' || 'ó' || 'Ó':
            vocales++
            break;
        case 'u' || 'U' || 'ú' || 'Ú':
            vocales++;
            break;
    }
}
console.log(vocales)

//encoding no detecta