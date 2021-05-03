let nombre = 'Eugenio';
let apellido = 'Gonzalez';
let frase = '              Bienvenido a la clase            ';

console.log(nombre, apellido);
console.log(nombre + ' ' + apellido);

//Template Strings
console.log(`Mi nombre es ${nombre} ${apellido}`);

//metodos de los Strings
console.log(nombre.toUpperCase());
console.log(nombre.toLocaleLowerCase());
console.log(apellido.length);
console.log(apellido.charAt(3));
console.log(nombre.charAt(nombre.length - 1));
console.log(apellido.substr(2, 3)); // parametros de substraccion de caracteres
console.log(frase.trim())