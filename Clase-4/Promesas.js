// Las promesas representan un valor que va a existir a futuro
// va a estar disponible, mas adelante, de la ejecucion

// Estados:
// 1- Pending
// 2- Resolve // el resultado es positivo
// 3- reject // el resultado es negativo (false)


function obtenerUsuarioPromise(id) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (id === 3) {
                return reject({ error: "Usuario 3 no encontrado" })
            }


            resolve({
                id,
                nombre: `Usuario ${id}`
            })
        }, 1500);
    })
}

// setTimeout(() => {

//     console.log("resultado: ", respuesta);
// }, 2000);


// Uso basico:
// THEN - Se utiliza para ir avanzando en la promesa
// catch - se utiliza para atrapar cualquier error en la promesa
// finally - es opcional, se ejecuta al final de la promesa

obtenerUsuarioPromise(7).then((resp) => {
    // console.log("respuesta: ", resp);
}).catch((error) => {
    // console.log("Promesa Rechazada: ", error);

}).finally(() => {
    // console.log("Siempre se ejecuta al final, independiemente si fallo o no");
})


// obtenerUsuarioPromise(1)
//     .then((u1) => {
//         console.log("Usuario 1: ", u1);

//         return obtenerUsuarioPromise(2) // devuelve otra promesa
//     })
//     .then((u2) => {
//         console.log("Usuario 2: ", u2);

//         return obtenerUsuarioPromise(6) // devuelve otra promesa
//     })
//     .then((u3) => {
//         console.log("Usuario 3: ", u3);

//         return obtenerUsuarioPromise(4) // devuelve otra promesa
//     })
//     .then((u4) => {
//         console.log("Usuario 4: ", u4);
//     })
//     .catch((err) => {
//         console.log("error: ", err);

//     })



// Promise.ALL
// Ejecuta todas las promesas, de una
// Si falla una, todo el proceso se rechaza

// Promise.all([obtenerUsuarioPromise(1), obtenerUsuarioPromise(2), obtenerUsuarioPromise(6), obtenerUsuarioPromise(4)])
// .then(([u1, u2, u3, u4]) => {
//     console.log("Promise All: ", u1, u2, u3, u4);

// })
// .catch(err => {
//     console.log("Fallo: ", err);
// })


// async / await

// asnyc await, funciona solo dentro de una funcion async

// declarando probarAsincronia, como funcion async

// async function probarAsincronia(){

// }

const probarAsincronia = async () => {

    try {

        const u1 = await obtenerUsuarioPromise(1)
        console.log("u1: ", u1);

        const u2 = await obtenerUsuarioPromise(2)
        console.log("u2: ", u2);

        const u4 = await obtenerUsuarioPromise(4)
        console.log("u4: ", u4);

        const u3 = await obtenerUsuarioPromise(3)
        console.log("u3: ", u3);

    } catch (error) {
        console.log("Error: ", error);

    }

}


// const probarAsincronia = async () => {

//     let cantidadUsuarios = 20

//     for (let i = 0; i < cantidadUsuarios; i++) {

//     try {

//         const u1 = await obtenerUsuarioPromise(i)
//         console.log(u1);

//     } catch (error) {
//         console.log("Error: ", error);

//     }

// }


probarAsincronia()



