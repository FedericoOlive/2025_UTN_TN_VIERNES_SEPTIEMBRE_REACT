import React, { useState } from 'react'

function App() {

  //HOOK
  //HOOK nativo de react
  //Nos permite crear un estado
  //Recibe el valor inicial del estado
  //Retorna un array con 2 valores, el primer valor es el estado y el segundo es la funcion para cambiar el estado
  const [contador, setContador] = useState(0)



  function incrementarContador(){

    
    setContador( contador + 1 )
    console.log('El valor de contador es:', contador)
  }


  /* Desarrollar en boton de decrtementar */
  /* 
  -Que el contador no pueda ser mayor a 10 
  -si estamos en 10 debe aparecer en rojo un cartel que diga que el contador no puede ser mayor a 10 y deshabilite el boton
  -Que el contador no pueda ser negativo
  -Si estamos en 0 debe aparecer en rojo un cartel que diga que el contador no puede ser menor a 0 y deshabilite el boton 
  */
  return (
    <div>
      <h1>Estados</h1>
      <button>-</button>
      <span>{ contador }</span>
      <button
        onClick={incrementarContador}

      >
        +
      </button>
      <br/>
      {
        contador >= 10 && <span style={{color: 'yellow', backgroundColor: 'black'}}>El contador no puede ser mayor a 10</span>
      }
    </div>

  )
}

export default App

