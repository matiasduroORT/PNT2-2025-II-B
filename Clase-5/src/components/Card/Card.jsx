import React from 'react'
import './Styles.css'

const Card = ({ nombre, materias }) => {

    // Desestructuracion
    // const { nombre, materias } = props

  return (
    <div className='CardContainer'>
        <h3>Alumno: {nombre}</h3>
        <p>Materias: {materias}</p>
    </div>
  )
}


// const Card = (props) => {

//     console.log("Props: ", props);
//     // Desestructuracion

//     const { nombre } = props

//   return (
//     <div>
//         <h3>Alumno: {nombre}</h3>
//         <p>Materias: {props.materias}</p>
//     </div>
//   )
// }

export default Card