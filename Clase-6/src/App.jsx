import { useEffect } from "react";
import { useState } from "react";
import { Titulo } from "./components/Titulo";
import "./styles.css"
import { EncuentroPokemon } from "./components/EncuentroPokemon";
import { Navbar } from "./components/navbar";
import { TeamProvider } from "./contexts/TeamContext";

function App() {

  return (
    <TeamProvider>
      <div>
        <Navbar />

        <main className="main">
          <div className="container">
            <div className="main-header">
              <h2 className="main-title"> Encuentro Pokemon!</h2>
              <p className="main-subtitle">Captura este Pokemon para tu equipo!. Maximo 6</p>
            </div>
            <EncuentroPokemon />
          </div>
        </main>
      </div>
    </TeamProvider>
  )
}

export default App
