function suma(a, b) {
    return a + b
}

suma(5, 8)

// console.log(suma(5, 8));

function operacionMatematica(num1, num2, callback) {

    return callback(num1, num2)
}

const resultado1 = operacionMatematica(5, 10, suma)
const resultado2 = operacionMatematica(5, 7, (x, y) => x * y)

// console.log("resultado1: ", resultado1);
// console.log("resultado2: ", resultado2);


// Metodos de arrays que usan callbacks (map, for each, filter, reduce)

const numeros = [5, 10, 15, 6, 3]

const porCinco = numeros.map((num, posicion) => {
    // console.log("posicion: ", posicion);
    // console.log("num: ", num);

    return num * 5;
})

// console.log("porCinco", porCinco);


numeros.forEach((num) => {
    if (num > 7) {
        // console.log("numero mayor a 7: ", num);

    }
})

// callbacks asincronicos
// metodo error first
function obtenerUsuario(id, callback) {

    setTimeout(() => {

        if (id === 3) {
            // ejemplo si algo sale mal
            const resp = callback("Usuario 3 no encontrado", null)


            return resp
        }

        // si algo sale bien

        return callback(null, { id, nombre: `Usuario ${id}` })

    }, 500);

}

const findUser = (error, usuario) => {

    if (error) {
        console.log("sucedio un error");
        return error
    }

    console.log("Usuario: ", usuario);
    return usuario
}

// for (let i = 0; i < 10; i++) {
//     obtenerUsuario(i, findUser)
// }



// Callback Hell
// cuando tenemos anidacion de funciones, en gran cantidad, se vuelve
// Muy dificil de leer, mantener y manejar errores

function llamadoUsers() {
    obtenerUsuario(1, (err, u1) => {
        // obtener usuario 1, llama al usuario
        if (err) {
            console.log("error");

            return
        }
        console.log("todo ok: ", u1);

        // para llamar al usuario 2, necesito al usuario 1
        obtenerUsuario(2, (err, u2) => {

            if (err) {
                console.log("error");

                return
            }
            console.log("todo ok: ", u2);

            // para llamar al usuario 3, necesito al usuario 2

            obtenerUsuario(3, (err, u3) => {

                if (err) {
                    console.log("error");

                    return
                }
                console.log("todo ok: ", u3);

                obtenerUsuario(2,)

            })

        })

    })

}


const pedirProductos = () => {

    const usuario = obtenerUsuario(1)
    
    const producto = obtenerProducto(usuario)
}


llamadoUsers()



