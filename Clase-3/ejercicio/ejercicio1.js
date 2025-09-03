// Identificar polindromos

// ejemplos: oso, ana, 

function invertirTexto(palabra){

    return palabra.split("").reverse().join("")

    // i = 0;
    // arrayInvertido = []
    // while(palabra.length > i){
    //     arrayInvertido.unshift(palabra.charAt(i))
    //     i++
    // }
    // let palabraInvertida = arrayInvertido.join("")
    // return palabraInvertida
}

const esPalindromo = (palabras) => {
    // tiene que retornar un array con las palabras palindromas
    let palindromas = []

    for (const palabra of palabras) {
        let palabraMinuscula = palabra.toLowerCase()

        let palabraInvertida = invertirTexto(palabraMinuscula)

        if(palabraMinuscula === palabraInvertida){
            palindromas.push(palabra)
        }
    }
   

    return palindromas
}

const palabras = ["Sol", "Ana", "Oso", "Saludo", "Reconocer", "Soldado", "Neuquen"]

const resultado = esPalindromo(palabras)

console.log("Resultado: ", resultado);


// let ejemplo = "Oso"

// console.log(ejemplo.toLowerCase());
