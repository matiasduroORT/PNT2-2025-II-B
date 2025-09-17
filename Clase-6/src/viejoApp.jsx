import { useEffect } from "react";
import { useState } from "react";
import { Titulo } from "./components/Titulo";
import "./styles.css"
import { EncuentroPokemon } from "./components/EncuentroPokemon";

function App() {

  const [pokemon, setPokemon] = useState(null)


  // fetch("https://pokeapi.co/api/v2/pokemon/6")
  // .then(res => res.json())
  // .then(data => {
  //   console.log("data: ", data); 
  // })

  const fetchPokemon = async () => {

    try {
      
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/6")
      const pokemon = await response.json()

      console.log("pokemon:", pokemon.name);
      
      setPokemon(pokemon)

    } catch (error) {
      
    }

  }


  useEffect(() => {
    
    fetchPokemon()

  }, [])
  

  

  return (
    <main className="main">
      <div className="container">
        <div className="main-header">
          <h2 className="main-title"> Encuentro Pokemon!</h2>
          <p className="main-subtitle">Captura este Pokemon para tu equipo!. Maximo 6</p>
        </div>
        <EncuentroPokemon/>
      </div>
    </main>
  )
}

export default App
