import React, { useState } from 'react'
import Contador from './Components/Contador/Contador'
import { Route, Routes } from 'react-router'
import PostScreen from './Screens/PostsScreen/PostScreen'
import { getAllProducts } from './services/productsService'

function App() {

  getAllProducts()
  return (
    <div>
      
      <Routes>
        {/* Si el path (direccion) matchea con '/posts' montame el componente <PostScreen/> */}
        <Route path='/posts' element={ <PostScreen/>} />
      </Routes>
    </div>

  )
}

export default App

/* 
Cada post sera asi: 
{
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}

Components
  - <PostCard userId, id, title, body />

Routing
  - /posts => Listado de posteos
  - /posts/:post_id => Obtener detalle de posteo
*/