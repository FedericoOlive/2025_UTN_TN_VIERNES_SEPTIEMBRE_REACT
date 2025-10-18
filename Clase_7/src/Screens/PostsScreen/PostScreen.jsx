import React, { useState } from 'react'
import PostCard from '../../Components/PostCard/PostCard'

const PostScreen = () => {
    const [ post_list, setPostList ] = useState([])
    //Asincronia
    /* 
    Que soluciona? 
    La cantidad de outputs que podemos dar

    Es la capacidad de delegar tareas bloqueantes para poder continuar la ejecucion del codigo hasta que dicha tarea sea resuelta y cuando esto suceda, poder seguir con ese flujo de codigo
    */

    //Promise
    //Es un objeto que JS usa para resolver codigo asincronico
    //Basicamente tiene un estado interno que marca el estado de la promesa
    //Dicho estado puede ser 1 de estos 3:
    // - Pending => La promesa esta pendiente a ser resuelta
    // - Resolved => La promesa fue resuelta con exito
    // - Rejected => La promesa no fue resuelta con exito

    //Fetch nos permite hacer consultas HTTP
    //Fetch es asincronica, por lo tanto los retornara una promesa
    //hay que pasarle a fetch:
    //-URL
    //objeto de configuracion de consulta
    async function cargarPosts () {
        //Await indica que mi codigo se pause hasta que se resuelva la promesa
        const respuesta = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'GET'
            }
        )
        const data = await respuesta.json()
       
        console.log(data)
    }
    cargarPosts()
    const post_list_example = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
    ]

    const lista_post_jsx = post_list_example.map(
        (post) => {
            console.log('me ejecuto')
            return (
                <PostCard title={post.title} body={post.body} id={post.id} userId={post.userId} />
            )
        }
    )

    //JSX List
    /* const list = [
        <h1>Hola</h1>,
        <h1>Hola</h1>,
        <h1>Hola</h1>
    ] */

    //map metodo avanzado de arrays para transformar un array en otro array

    /* const nombres = ['pepe', 'maria', 'juan']
    const iniciales_nombres = nombres.map(
        (nombre) => {

            let letra_incial = nombre[0]
            return letra_incial
        }
    ) */
    //['p', 'm', 'j']
    return (
        <div>
            <h1>Posteos</h1>
            {/* 
        Aqui deberian llamar a <PostCard/>
        */}

            {lista_post_jsx}
        </div>
    )
}

export default PostScreen