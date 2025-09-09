import React, { useState } from 'react'

export const Counter = () => {

    // let contador = 0 NO SE CREA VARIABLE

    // el primer argumento, es el nombre de nuestro estado
    // el segundo argumento, que siempre arranca con set, es una funcion
    // la cual, se va a encargar de setear nuestro estado
    const [contador, setContador] = useState(0)

    const handleClick = () => {
        console.log("Click");
        console.log("Contador: ", contador);
        setContador(contador + 1)
    }
  return (
    <>

    <h3>{contador}</h3>
    <button onClick={handleClick}>
        + 1
    </button>
    {/* Button que reduzca el contador en -1 */}
    {/* boton que reduzca el contador a 0 */}
    </>
  )
}
