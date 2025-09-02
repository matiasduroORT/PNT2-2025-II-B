// Sincronia vs Asincronia

console.log("A- Inicio sincronico");


let usuario


setTimeout(() => {
    
    console.log("usuario: ", usuario);
}, 29);


setTimeout(() => { // simulemos que el settimeout es una consulta a una base de datos

    console.log("B- Medio sincronico");

    usuario = {
         nombre: 'Mateo'
    }
    
}, 27);




console.log("C- Final sincronico");
