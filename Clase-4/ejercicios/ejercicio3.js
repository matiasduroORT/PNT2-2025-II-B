const usuariosDB = {
    1: { nombre: "Ana", edad: 25 },
    2: { nombre: "Pedro", edad: 30 },
    3: { nombre: "Lucia", edad: 28 },
    4: { nombre: "Juan", edad: 22 },
};

function obtenerUsuario(id, usuariosDB) {

    // console.log("ID: ", id);
    // console.log("usuariosDb: ", usuariosDB[id]);


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuariosDB[id]

            if (usuario) {
                resolve(usuario)
            } else {
                reject(`usuario con id: ${id}, no encontrado`)
            }
        }, 500);
    })
}




// crear funcion asincrona con async / await 

async function mostrarUsuarios(ids, usuariosDB) {

    const resultados = []


    for (const id of ids) {
        try {
            const usuario = await obtenerUsuario(id, usuariosDB)
            resultados.push(usuario)

        } catch (error) {
            console.log("error: ", error);
        }

    }
    console.log("resultados: ", resultados);
}


mostrarUsuarios([1, 2, 4, 8], usuariosDB)
