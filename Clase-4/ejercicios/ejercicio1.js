
// Funcion asincronica, con callbacks
// simulamos una peticion a la base de datos (timeout)

function separarUsuariosCallback(lista, callback){

    console.log("lista: ", lista);

    // tiene que devolver un array de hombres, y otro de mujeres
 
    callback({})
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