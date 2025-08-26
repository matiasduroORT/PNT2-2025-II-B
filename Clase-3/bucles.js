

// for clasico (cuando se cuanto va a durar)

let frutas = ["banana", "manzana", "frutilla"]

for (let i = 0; i < frutas.length; i++) {
    // console.log("Fruta: ", frutas[i]);
    
}

// WHILE: (no sabemos cuanto va a durar)

let n = 0

while(n <= 7){
    // console.log("N es: ", n);
    n++
}
// do... while (se ejecuta al menos una vez)
let num = 20
do{
    // console.log("num = ", num);
 num++   
}while(num < 5)

frutas = ["banana", "manzana", "frutilla"]

let palabra = "Banana"
//  FOR...OF (sirve mucho para recorrer arrays o strings)
for (const element of frutas) {
    // console.log("element: ", element);
}

let usuario = {
    nombre: "Franco",
    materia: "PNT2"
}

for (const element in usuario) {
    // console.log("valor: ", usuario[element]);
    
}

let persona = {
    nombre: "Manuel",
    edad: 28,
    estado: true,
    materias: 'pnt2'
}

for (const llave in persona){
    const variable = persona[llave]
    console.log("variable: ", variable);
}


const numeros = [2, 4, 6, 27, 45]

numeros.forEach(n => console.log("Por cada uno, ", n))