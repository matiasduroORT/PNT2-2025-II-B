import React, { useState, useEffect } from 'react'
import { useTeam } from '../contexts/TeamContext'


export const EncuentroPokemon = () => {
    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [loading, setLoading] = useState(false)
    const [equipo, setEquipo] = useState([])

    const { addToTeam } = useTeam()
    

    const fetchRandomPokemon = async () => {


        setLoading(true)
        try {
            const randomId = Math.floor(Math.random() * 151) + 1
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            const pokemon = await response.json()
            setTimeout(() => {
                setCurrentPokemon(pokemon)
                setLoading(false)
            }, 500);
        } catch (error) {

        }
    }


    useEffect(() => {
        fetchRandomPokemon()
    }, [])



    if (loading) {
        return (
            <div className='loading'>
                <h2>Buscando un Pokemon salvaje...</h2>
            </div>
        )
    }

    if (!currentPokemon) {
        return (
            <div className='loading'>
                <h2>No se encontro ningun Pokemon</h2>
            </div>
        )
    }

    const handleCatch = () => {
        if (currentPokemon) {
            // setEquipo([currentPokemon.name])

            addToTeam(currentPokemon)
            setEquipo((prev) => [...prev, currentPokemon])
            console.log(equipo);
            
        }
    }

    const handlePass = () => {
        fetchRandomPokemon()
    }


    return (
        <div className='pokemon-card'>
            <div className='pokemon-header'>
                <h2 className='pokemon-title'>Aparecio un {currentPokemon.name} salvaje!!!</h2>
            </div>

            <div className='pokemon-content'>
                <div className="pokemon-image-container">
                    <img src={currentPokemon.sprites.other.showdown.front_default} alt={currentPokemon.name} className="pokemon-image" />
                </div>
            </div>

            <div className='pokemon-types'>
                {currentPokemon.types.map((type) => {

                    // console.log("que tengo aca? ", type.type.name);

                    return (
                        <span key={type.type.name} className='pokemon-type'>
                            {type.type.name}
                        </span>
                    )
                })}
            </div>


            <div className="pokemon-stats">
                <div className="pokemon-stat">
                    <div className="pokemon-stat-label">Altura</div>
                    <div>{currentPokemon.height / 10} m</div>
                </div>
                <div className="pokemon-stat">
                    <div className="pokemon-stat-label">Peso</div>
                    <div>{currentPokemon.weight / 10} kg</div>
                </div>
            </div>

            <div className='pokemon-actions'>
                <button onClick={handleCatch} className='btn btn-catch'>
                    Capturar!
                </button>
                <button onClick={handlePass} className='btn btn-catch'>
                    Buscar Otro
                </button>
            </div>
        </div>
    )
}
