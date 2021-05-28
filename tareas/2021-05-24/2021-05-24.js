/*

**Objeto Persona**

Crear un objeto llamado persona que contenga los siguientes atributos:

Nombre

Edad

DNI

Domicilio

Hijos (cantidad)

Profesión

Agregar Métodos:

Saludar ( mensaje de presentación en navegador o consola)

Listar (muestra la lista con los datos de la persona)

**Arreglo de objetos: Películas**

Crear un arreglo de objetos que contenga datos de películas como:

- Título
- Género
- Año
- sinopsis
- Crea una función que permita mostrar en una lista cada película con sus datos.

*/

let persona = {
    nombre: 'Pablo Giroud',
    edad: '34',
    dni: '32413970',
    domicilio: 'Pje. Bertres 211',
    hijos:'1',
    profesion:'QA Manager at Extrimian LLC.',
    //Agregar Métodos:
    saludar: function(){
        //( mensaje de presentación en navegador o consola)
        console.log(`Hola! mi nombre es ${this.nombre}, tengo ${this.edad} años. Tengo ${this.hijos} hijos y mi profesion es ${this.profesion}`);
    },
    //Listar (muestra la lista con los datos de la persona)
    listar: function() {
        console.log(`+-- Datos Personales --+`);
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.dni}`);
        console.log(`Domicilio: ${this.domicilio}`);
        console.log(`Hijos: ${this.hijos}`);
        console.log(`Profesion: ${this.profesion}`);
        console.log(`+----------------------+`);
    },
}