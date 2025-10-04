import React, { useState } from 'react'
import Contador from './Components/Contador/Contador'

function App() {


  return (
    <div>
      <h1>Estados</h1>
      <Contador initial={8} minimo={5} limite={20}/>
      <Contador 
        initial={4} 
        minimo={0} 
        limite={8}
      />
      <Contador initial={1} minimo={-10} limite={8}/>
    </div>

  )
}

export default App

