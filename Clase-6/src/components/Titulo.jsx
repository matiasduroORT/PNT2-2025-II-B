import React from 'react'
import { useEffect } from 'react'

export const Titulo = () => {

    useEffect(() => {
    
        console.log("Me monte");
        
      return () => {
        console.log("Mori");
      }
    }, [])
    


  return (
    <div>Sin Pokemons</div>
  )
}
