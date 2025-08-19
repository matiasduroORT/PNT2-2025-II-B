// TIP:
// Para comentar y descomentar rapidamente, es ctrl + / 
// Teclado espanol: es ctrl + shift + 7

// var no se re comienda en codigo moderno
// var es un tipo de variable, que se puede redeclarar, y reasignar
var nombre = 'Matias'

// console.log("LOG VariableNombre:", nombre);

nombre = 'Lucas'

// console.log("LOG VariableNombre:", nombre);

var nombre = 'Lautaro'

// console.log("LOG VariableNombre:", nombre);


// let, se puede reasignar, pero no redeclarar, en el mismo scope 

let edad = 20;

// console.log("Edad con let: ", edad);

if(edad > 19){
    // let edad = 25

    // console.log("edad es :", edad);
    
}

// console.log("Edad con let: ", edad);


// const, no se puede reasignar, ni reclarar


const materias = ["PNT2", "TP2"]

console.log("Materias: ", materias);

if(true){
    materias = ["TP2"]

}

console.log("Materias: ", materias);
