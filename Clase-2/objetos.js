let nombre = "Matias Duro"
let materias = ["PNT2", "TP2"]

function saludo(){
    return "Hola"
}

const alumnos = {
    alumno1: {
        nombre: "Mateo",
        aprobado: true
    },
    alumno2: {
        nombre: "Lucia",
        aprobado: true
    },
    alumno3: {
        nombre: "Sofia",
        aprobado: true
    },
}

let admin = false

let adios = "nos vemos"

const usuario = {
    nombreCompleto: nombre,
    materias: 2, // si la llave tiene el mismo nombre que la variable, podes poner la variable sola
    alumnos,
    hablar: function (){ return 'Hablo'},
    accionSaludar: saludo,
    aprobadas: null,
    "sistema operativo": 'Windows',
    presentar: function presentar(){
        return `Soy ${this.nombreCompleto}, tengo, y mis materias son ${materias}. ${adios}`
    }
}

console.log("Usuario: ", usuario.presentar());
// console.log("Usuario: ", usuario["sistema operativo"]);




