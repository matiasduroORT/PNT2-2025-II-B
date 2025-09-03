const usuarios = [
    { nombre: "Matías", edad: 28, sexo: "hombre" },
    { nombre: "Valentina", edad: 24, sexo: "mujer" },
    { nombre: "Agustín", edad: 31, sexo: "hombre" },
    { nombre: "Lucía", edad: 27, sexo: "mujer" }
];

const separar = (usuarios) => {
    let hombres = []
    let mujeres = []

    for (const usuario of usuarios) {
        
        // console.log("usuario: ", usuario);

        for (const key in usuario) {
                const element = usuario[key];                
                if(key === "sexo"){

                    // if(usuario.sexo === 'hombre'){
                    //     hombres.push(usuario)
                    // }else{
                    //     mujeres.push(usuario)
                    // }

                    // usuario.sexo === 'hombre' && hombres.push(usuario)
                    // usuario.sexo === 'mujeres' && mujeres.push(usuario)

                    (usuario.sexo === 'hombre') ? hombres.push(usuario) : mujeres.push(usuario)
                }

        }
        
    }

    return {
        hombres,
        mujeres
    }
}


const resultado = separar(usuarios)

console.log("resultado: ", resultado);

// {
//     hombres: [],
//     mujeres: []
// }
