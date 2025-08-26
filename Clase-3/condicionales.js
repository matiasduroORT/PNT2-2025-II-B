
let numero = 87

let array = []

// console.log("Es 5?: ", numero !== 5);

// Valores Falsy
// NULL
// 0
// undefined
// false
// ""

// if (!numero) {
//     console.log("numero no existe: ", numero);
// } else if (numero === 5) {
//     console.log("Es 5: ", numero);
// }
// else {
//     console.log("numero: ", numero);
// }


// operador ternario (version compacta del if/else)

let edad = 23
//   IF TERNARIO: CONDICION  || VALOR TRUE ||  VALOR FALSE
let licencia = (edad >= 18) ? "Permitida" : "Denegada";

let licenciaEspecial = (edad < 18) ? "Denegada" : (edad <= 21) ? "Permitido con tutor" : "Permitido";

// if(edad >= 18){
//     licencia = "Permitida"
// }else{
//     licencia = "Denegada"
// }

// console.log("licenciaEspecial: ", licenciaEspecial);

// console.log(5 === "5");


// == vs ===
// == compara solamente el valor
// === compara valor y el tipo

let permitido = true

if(permitido){
    // console.log("Entrar");
}

// (permitido) ? console.log("Entrar") : ""
 
// && (AND) ejecuta la derecha solo si la izquierda es positiva o truthy

// permitido && console.log("Entrar 2");


// || (OR) devuelve el primer valor verdadero/positivo/truthy

let nombre = ""
let nombre2 = "Martin"


if(nombre === "Franco" || nombre === "Mateo" || nombre2 === "Martin"){
    console.log("Hola ", nombre);
}else{
    console.log("Quien eres?");
    
}

let usuario = {
    nombreCompleto: nombre || "Sin el nombre"
}

// ?? nullish (si la condicion es null/undefined, entonces ejecuta lo siguiente)
let alumno = "Matias"
let nombreCompleto2 = alumno ? alumno : "Sin nombre"

let nombreCompleto = alumno ?? "Sin nombre"

console.log("nombreCompleto: ", nombreCompleto);
