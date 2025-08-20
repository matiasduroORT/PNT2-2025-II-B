// Arrays

// Metodos de Arrays

let frutas = ["Banana", "Manzana", "Frutilla"]

// console.log("Frutas: ", frutas);

// Agrega un elemento al final
frutas.push("Uva")

// console.log("Frutas: ", frutas);

// Remueve el ultimo elemento del array
frutas.pop()

// console.log("Frutas: ", frutas);


// remueve el primer elemento del array
frutas.shift()

// console.log("Frutas: ", frutas);


// agrega un elemento al comienzo
frutas.unshift("Kiwi")

// console.log("Frutas: ", frutas);





let numeros = [5, 7, 1, 23, 27]

const alCuadrado = numeros.map(function(num) {
    console.log("num: ", num);
    return num * num
} )

const menos5 = numeros.map( num => {num - 5}) // arrow function
// si el return va a estar en la misma linea, no hace faltan las llaves, ni el return

const mas5 = numeros.map( num => {
    let cinco = 5
    return num + cinco // Si la funcion tiene {} el return debe ir si o si
}) // arrow function


console.log("menos5: ", menos5);
console.log("mas5: ", mas5);



// filter
// se encarga de filtrar los arrays, y te devuelve lo filtrado

const mayoresASiete = numeros.filter(num => num > 7)

console.log("mayoresASiete: ", mayoresASiete);


let alumnos = ["Mateo", "Valentina", "Agustin"]


const estaMateo = alumnos.filter(nombre => nombre === "Mateo")


console.log("estaMateo: ", estaMateo);



// Reduce , tiene un acumulador
numeros = [5, 7, 1, 23, 27]

let sumaTotal = numeros.reduce((acumulador, num) => {

    return acumulador + num
})

console.log("Suma Total: ", sumaTotal);


const user = [
    {
        materia: 1
    },
    {
        materia: 2
    }
]

const sum = user.reduce((acc, num) => {

    return acc + num.materia
}, 0)


console.log("Suma users: ", sum);



// Find, devuelve el primero que cumpla con la condicion

const primerMayor7 = numeros.find(number => number > 7)

console.log("primerMayor7: ",primerMayor7);


// some, Si alguno cumple con la condicion, retorna true

const alumnoCumple = numeros.some(num => num === 15)

console.log("alumnoCumple: ", alumnoCumple);

// every, solo devuelve true, si todos cumplen con la condicion

const alumnoCumple2 = numeros.every(num => num > 3)

console.log("alumnoCumple2: ", alumnoCumple2);



