//spread operator ... desestructura los elementos y los pasa uno a uno.

let grupoA = ["Mateo", "Franco", "Luis", "Sofia"]
let grupoB = ["Lautaro", "Joaquin"]

grupoA.push(...grupoB)

console.log("Grupo unido: ", grupoA);
