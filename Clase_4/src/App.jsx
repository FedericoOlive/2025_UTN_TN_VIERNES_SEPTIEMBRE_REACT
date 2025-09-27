import React from 'react'
import MyComponent from './Components/MyComponent/MyComponent'
import ProductCard from './Components/ProductCard/ProductCard'


/* 

Los archivos de JSX tienen un nuevo tipo de dato llamado JSX, muy parecido a HTML

Los componentes son funciones que retornan este JSX
Los componentes deben ser llamados con mayuscula
*/

//App es un componente
function App() {


  return (
    <div>
      <h1>Hola Pepe</h1>
      <MyComponent/>
      <MyComponent/>
      <MyComponent/>

      <ProductCard 
        price="1500" 
      />
      <ProductCard
        price="1600"
      />
      <ProductCard
        price="600"
      />
    </div>

  )
}

export default App

