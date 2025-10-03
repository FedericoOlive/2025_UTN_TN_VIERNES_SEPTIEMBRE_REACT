import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import PI, {sumar, restar} from './math.js'

console.log(sumar(PI, PI))

//Renderizame la app de react dentro del div con id root
createRoot(document.getElementById('root')).render(
  <App />
)
