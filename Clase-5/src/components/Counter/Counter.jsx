import React, { useState } from 'react'
import { Button } from '../Button/Button'

export const Counter = () => {

    // let contador = 0 NO SE CREA VARIABLE

    // el primer argumento, es el nombre de nuestro estado
    // el segundo argumento, que siempre arranca con set, es una funcion
    // la cual, se va a encargar de setear nuestro estado
    const [contador, setContador] = useState(0)

    const handleMinus = () =>{

        if(contador > 0){
            setContador(contador - 1)
        }else{
            setContador(0)
        }
    }

  return (
    <>

    <h3>{contador}</h3>
    <Button setContador={() => setContador(contador + 1)} titulo={"+1"}/>
    <Button setContador={handleMinus} titulo={"-1"}/>
    <Button setContador={() => setContador(0)} titulo={"reset"}/>

    {/* Button que reduzca el contador en -1 */}
    {/* button que reduzca el contador a 0 */}
    </>
  )
}
