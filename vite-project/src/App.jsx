import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>
      <h1>Bienvenidos a mi Vite</h1>
      <input
        type="text"
        placeholder="Agregar una película o serie"
      />
      <button>
        Agregar
      </button>
      <ul >
          <li>Pelicula 1</li>
          <li>Pelicula 2</li>
          <li>Pelicula 3</li>
          <li>Pelicula 4</li>
          <li>Pelicula 6</li>
          <li>Pelicula 7</li>
          <li>Pelicula 8</li>
          <li>Pelicula 9</li>
      </ul>
    </>
  )
}

export default App
