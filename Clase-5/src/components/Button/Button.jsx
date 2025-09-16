import React from 'react'

export const Button = ({titulo, setContador}) => {
  return (
    <button onClick={setContador}> {titulo}</button>
  )
}
