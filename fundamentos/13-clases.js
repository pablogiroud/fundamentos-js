//clases
//contenedor

//instancias

//funcion constructora => plantilla

//objetos => propiedades, métodos

//instancias => todos los objetos derivados de una clase o funcion constructora

//persona => nombre, apellido, edad, dni, domicilio
//=> saludar(), estudiar(),

//crear una clase

class Persona {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }
  }
  
  let persona1 = new Persona("Fabrizio", "Tonin");
  let persona2 = new Persona("Carlos", "Rodriguez");
  
  //herencia
  
  //extends palabra clave se utiliza para crear una clase secundaria de otra clase (principal).
  
  /*
    Nota: El super()método se refiere a la clase principal. Al llamar al super()método en el método constructor, llamamos al método constructor del padre y obtenemos acceso a las propiedades y métodos del padre.
    */
  
  class Profesor extends Persona {
    constructor(nombre, apellido, materia) {
      super(nombre, apellido);
      this.materia = materia;
    }
  
    presentacion() {
      console.log(`Buen día juntos aprenderemos ${this.materia}`);
    }
  }
  
  let profe1 = new Profesor("Fabrizio", "Tonin", "React Native");
  
  /*
      Cuenta bancaria
      2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
      Una propiedad titular con el valor "Alex".
      Una propiedad saldo, teniendo como valor inicial 0.
      Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
      Un método extraer() que permita retirar la cantidad pasada como parámetro.
      Un método informar() que retorne la información del estado de la cuenta. 
      Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
      
      */
  
  class Cuenta {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    ingresar(valor) {
      if (valor <= 0) {
        console.error("Ingresar un valor mayor que 0");
        return;
      }
      this.saldo += valor;
      //this.saldo=this.saldo + valor
      this.informar();
    }
  
    extraer(valor) {
      if (valor > this.saldo) {
        console.warn(`Solo puede extraer hasta $${this.saldo}`);
        return;
      }
      this.saldo -= valor;
      //this.saldo=this.saldo - valor
    }
  
    informar() {
      console.log("====Detalle de la cuenta====");
      console.log(`Titular: ${this.titular}`);
      console.log(`Saldo: ${this.saldo}`);
      console.log("============================");
    }
  }
  
  let cuenta1 = new Cuenta("Alex");
  