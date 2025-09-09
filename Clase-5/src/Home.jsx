import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Titulo } from './components/Titulo/Titulo'
import Card from './components/Card/Card'
import { Counter } from './components/Counter/Counter'

const Home = () => {

  return (
    <>
     <Titulo/>
     <Card nombre={"Santiago"} materias={"PNT2"}/>
     <Counter/>
    </>
  )
}

export default Home