alert("Bienvenido a la maquina de sumar");
let numero = prompt("Por favor ingrese un numero");
let total = 0;

while (numero) {
  if (numero === '') {
    alert("Debe ingresar un valor numérico");
    numero = prompt("Por favor asegúrese que esta vez ingresa un numero");
  } else if (isNaN(numero)){
    console.log('Debe ingresar texto');
    continue;
  }
  else {
    total += parseInt(numero);
    numero = prompt("Ingrese el número para sumar, presione cancelar para mostrar el resultado");
  }
}
if (total === 0) {
  console.log(`Usted no ingresó valores sumables`);
} else {
  console.log(`La suma de los valores ingresados es: ${total}`);
}