/** Tarea 1 - Capitalizar el Nombre
recibo un nombre y lo capitalizo
nombre: josé - capitalizado: José **/
let nombre = 'jose';
console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1));


// Tarea 2 - Ingresar 3 números
//Solucion 1
let arr1 = [8, 10, 86];
var arr2 = new Array(1, 2, 3, 4)
console.log(Math.max(arr1));
console.log(Math.max(arr2));

//indicar cual es el mayor
//Solucion 2
let num1 = 1;
let num2 = 2;
let num3 = 3;

if(num1>num2)
{
    if(num1>num3)
        {
            console.log('num1 es el mayor')
        }
    else
        {
         if(num3>num2)
            {
                console.log('num3 es el mayor')
            }
         else
            {
                console.log('num2 es el mayor')
            }
        }
}
else
{
    if(num2>num3)
        {
            console.log('num2 es el mayor')
        }
    else
        {
            console.log('num3 es el mayor')
        }
}

//indicar cual es el menor
let num4 = 1;
let num5 = 2;
let num6 = 3;

if(num4<num5)
{
    if(num4<num6)
        {
            console.log('num4 es el menor')
        }
    else
        {
         if(num6<num5)
            {
                console.log('num6 es el menor')
            }
         else
            {
                console.log('num5 es el menor')
            }
        }
}
else
{
    if(num5<num6)
        {
            console.log('num5 es el menor')
        }
    else
        {
            console.log('num6 es el menor')
        }
};


//obtener la raíz cuadrada del segundo número
console.log(Math.sqrt(num2));

/** Tarea 3 - Números con condicionales
ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3 
Ingresan dos números **/
let num7 = 3;
let num8 = 2;

//Si el primero es mayor que el segundo mostrar en consola la suma de ambos
if(num7>num8)
{
    console.log(`${num7} es mayor que ${num8}, la suma de ambos es ${num7 + num8}`);
}
else
{
    console.log('el segundo es mayor')
}
//Si el primero es menor que el segundo mostrar en consola la resta del segundo menos el primero.
let num9 = 1;
let num10 = 3;

if(num9<num10)
{
        console.log(`${num9} es menor que ${num10}, la diferencia es ${num10 - num9}`);
}
else
{
    console.log('el primero es mayor')
}

//Si son iguales mostrar en consola la multiplicación de ambos.
let num11 = 3;
let num12 = 3;

if(num11==num12)
{
    console.log(`${num11} es igual a ${num10}, la multiplicacion de ambos es ${num11 * num12}`);
}
else
{
    console.log('No son iguales')
}