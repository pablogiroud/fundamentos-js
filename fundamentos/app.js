//array
//lista

//mutacion de un arreglo
//metodos

let alumnos = ['Pablo', 'Fabrizio', 'Laura', 'Gabriela']

//acceder a un elemento dentro del arreglo
alumnos[2]
//obtener el ultimo elemento
alumnos[alumnos.length - 1]
//concatenar todos los elementos en un string
alumnos.join()

//iterar
for(let i=0; i<alumnos.length; i++){
    console.log(alumnos[i])
}

//agregar elementos
alumnos.push('Jorge')
//eliminar elemento
alumnos.pop()

//Anadir un elemento al principio
alumnos.unshift('Walter')
//eliminar un elemento del principio
alumnos.shift()

//encontrar el indice de un elemento
console.log(alumnos.indexOf('Carlos'))

//Encontrar un elemento / false true
console.log(alumnos.includes('Laura'))

//Eliminar un elemento mediante su posicion / 1er parametro indica donde se posiciona, 2do parametro indica cuantos elementos va aborrar a partir del indicado.
let pos=1
alumnos.splice(pos, 1)

