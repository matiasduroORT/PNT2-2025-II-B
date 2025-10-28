'use client'

import React, { useEffect, useState } from 'react'

export function PokeCard({pokeId}) {
    
    const [pokemon, setPokemon] = useState({})
    
    const fetchPokemon = async () => {

        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
        const data = await resp.json()
        
        console.log("data: ", data);
        setPokemon(data)
        
    }

    useEffect(() => {

        fetchPokemon()

    }, [])

  return (
    <div>

        <h1>Poke Card</h1>
        <h2>Nombre: {pokemon.name}</h2>
        <h2>ID: {pokemon.id}</h2>

    </div>
  )
}
