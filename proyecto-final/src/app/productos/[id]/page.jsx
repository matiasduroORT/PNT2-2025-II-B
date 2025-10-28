
import { PokeCard } from '@/components/Productos/PokeCard';
import React from 'react'
export default async function PokemonPage({ params }) {


    const { id } = await params;


  return (
    <PokeCard pokeId={id} />
  )
}
