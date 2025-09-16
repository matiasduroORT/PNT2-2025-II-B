import { useState } from 'react'
import './App.css'
import Home from './Home'
import { TodoApp } from './components/TodoApp/TodoApp'

function App() {

  const tareasIniciales = [
    {id: 1, titulo: "tarea 1", completada: true},
    {id: 2, titulo: "tarea 2", completada: false},
  ]

  const [tareas, setTareas] = useState(tareasIniciales)

  const [nuevaTarea, setNuevaTarea] = useState("")


  const handleChange = (e) => {    
    setNuevaTarea(e.target.value)
  }

  const handleCompletada = (id) => {

    
    const tareasActualizadas = tareas.map((tarea) => {            
      return tarea.id === id ? {...tarea, completada: !tarea.completada} : tarea
    })

    setTareas(tareasActualizadas)

  }

  const agregarTarea = () => {

    const newTask = {
      id: Date.now(),
      titulo: nuevaTarea,
      completada: false
    }

    setTareas([...tareas, newTask])
    setNuevaTarea("")
  }

  const handleDelete = (id) =>{
    setTareas(tareas.filter((t) => t.id !== id))
  }
  

  return (
   <>
    <h2>Todo App</h2>
    
    <input
      type='text'
      placeholder='Escribe una tarea...'
      value={nuevaTarea}
      onChange={handleChange}
      style={{margin:"20px"}}
    />

    <button onClick={agregarTarea}>Agregar Tarea</button>

    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id} style={{margin: "8px 0", textDecoration: tarea.completada ? "line-through" : "none"}}>
          {tarea.titulo}

          <button onClick={ () => handleCompletada(tarea.id)}>
            {tarea.completada ? "❌ Desmarcar" : "✅ Completar"}
          </button>

          <button onClick={ () => handleDelete(tarea.id)}>
            Eliminar Tarea
          </button>
        </li>
      ))}
    </ul>
   </>
  )
}

export default App
