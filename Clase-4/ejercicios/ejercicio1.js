
// Funcion asincronica, con callbacks
// simulamos una peticion a la base de datos (timeout)

function separarUsuariosCallback(lista, callback){

    let hombres = []
    let mujeres = []

    lista.forEach(user => {
        console.log("user: ", user.sexo);
        
        if(user.sexo === "M"){
            hombres.push(user.nombre)
        }else{
            mujeres.push(user.nombre)
        }
    });


    // tiene que devolver un objeto con array de hombres, y otro de mujeres
 
    callback({
        hombres: hombres,
        mujeres: mujeres
    })
}


const usuarios = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Pedro", sexo: "M" },
    { nombre: "Lucia", sexo: "F" },
    { nombre: "Juan", sexo: "M" },
  ];


separarUsuariosCallback(usuarios, (resultado) => {
    console.log("Resultado: ", resultado)

})