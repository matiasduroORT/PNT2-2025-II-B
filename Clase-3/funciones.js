//Hoisting: Permitir el uso de variables o funciones previas a su declaracion



var a = 20;
var b = 10



// Funcion Declarada
// Se puede llamar antes de su definicion, por hoisting
function sumar(x, y){
    return x + y
}

// funcion expresada
// no tiene hoisting, por lo que no se puede llamar antes de su iniciarla
let restar = function(x, y){
    return x - y
}

// arrow function o funcion flecha
// Tiene una sintaxis corta, se puede hacer en una sola linea, y el return es implicito
const multiplicar = (x, y) => x * y


console.log("sumar: ", sumar(a, b));
console.log("restar: ", restar(a, b));
console.log("multiplicar: ", multiplicar(a, b));
