function separarUsuariosPromise(lista){

    let hombres = []

    let mujeres = []

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            lista.forEach(user => {
                
                if(!user.sexo || !user.nombre){
                    reject({
                        error: "faltan datos"
                    })
                }

                (user.sexo === "F") ? mujeres.push(user.nombre) : hombres.push(user.nombre)
            });
                resolve({
                    hombres,
                    mujeres
                })
        }, 500);
    })

}


const usuarios = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Pedro", sexo: "M" },
    { nombre: "Lucia", sexo: "F" },
    { nombre: "Juan", sexo: "M" },
    { nombre: "Francisco", sexo: "M"},
  ];



separarUsuariosPromise(usuarios)
.then( resp => {
     console.log("respuesta: ", resp);
})
.catch(err => {
    console.log("err: ", err);
    
})

 