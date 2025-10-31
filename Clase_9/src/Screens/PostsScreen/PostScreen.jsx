import React, { useEffect, useState } from 'react'
import PostCard from '../../Components/PostCard/PostCard'

const PostScreen = () => {
    //Guardamos la respuesta del servidor
    const [post_list, setPostList] = useState([])

    //Guardamos el estado que indica si la consulta esta cargando o no
    const [post_list_loding, setPostListLoding] = useState(false)

    //Indica si hubo un error al resolver la consulta
    const [post_list_error, setPostListError] = useState(false)

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




    async function cargarPosts() {
        setPostListLoding(true)
        try {
            //Await indica que mi codigo se pause hasta que se resuelva la promesa
            const respuesta = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'GET'
                }
            )
            //cargamos la respuesta como JSON
            const data = await respuesta.json()

            setPostList(data)
        }
        catch (error) {
            console.error(error)
            setPostListError(error)
        }
        finally {
            setPostListLoding(false)
        }
    }

    const [isOpen, setIsOpen] = useState(true)

    //useState maneja la recarga del componente
    //useEffect maneja la recarga de una funcion

    //Quiero que cargues esta funcion 1 sola vez
    useEffect(
        //El efecto
        //Accion a ejecutar
        () => {
            console.log('Efecto')
        },
        //Array de dependencias
        //Una lista de valores que cuando cambien haran que se vuelva a ejecutar la funcionalidad
        //SI el array de dependencias esta vacio, entonces NO se volvera a ejecutar el efecto
        [isOpen]
    )
    useEffect(
        () => {

            cargarPosts()

        },
        []
    )
    console.log('normal')

    /* 
    Usar los estados: 
        post_list, 
        post_list_error, 
        post_list_loding
    Para renderizar distintos status en la pantalla
    Por ejemplo:
        Si esta cargando debe decir cargando
        Si hay respuesta el map debe mapear la respuesta
        Si hay error mostrar por alerta el error.message

    */
    console.log(post_list, post_list_error, post_list_loding)



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



    /* let postScreenContent = null

    if (post_list_loding) {
        postScreenContent = <span>Cargando...</span>
    }
    else if (post_list_error) {
        postScreenContent = <span>{post_list_error.message}</span>
    }
    else {
        postScreenContent = post_list.map(
            (post) => {

                return (
                    <div>

                        <PostCard title={post.title} body={post.body} id={post.id} userId={post.userId} />
                    </div>
                )
            }
        )
    } */

    return (
        <div>
            <h1>Posteos</h1>
            <PostScreenContent 
                post_list={post_list} 
                post_list_error={post_list_error} 
                post_list_loding={post_list_loding}
            />
            {/* {postScreenContent} */}
            {/* {
                post_list_loding && <span>Cargando posteos...</span>
            }
            {
                post_list_error && !post_list_loding && <span>{error.message}</span>
            } */}
            {/* {
                post_list_loding
                    ? <span>Cargando</span>
                    : (
                        post_list_error
                            ? <span>{post_list_error.message}</span>
                            : (
                                post_list_example.map(
                                    (post) => {

                                        return (
                                            <div>

                                                <PostCard title={post.title} body={post.body} id={post.id} userId={post.userId} />
                                            </div>
                                        )
                                    }
                                )
                            )
                    )
            } */}

            {/* 
        Aqui deberian llamar a <PostCard/>
        */}
            <button onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? 'Cerrar' : 'Abrir'}</button>

        </div>
    )
}

export default PostScreen


//Se intenta ejecutar este bloque de codigo
/*         try{
            let nombre = 'adsdsa'
            if(!nombre){
                //Throw hace que se lance un error al catch mas cercano
                throw {message: 'Nombre no esta definido', code: 1}
            }
            console.log('hola')
            console.log(1 + b)
        }
        //Si dentro del bloque try ocurrio algun fallo, entonces se captura el fallo y se ejecuta el bloque catch
        catch(error){
            if(error.code){
                alert('Ocurrio un error: ' + error.message)
            }
            else{
                console.error('Ocurrio un error al sumar, Razon: ' + error.message)
            }
        } */

/* 
DUMMY COMPONENT
Componentes presentacionales
Estos componentes solo tienen la responsabilidad de mostrar contenido.
*/

function PostScreenContent ({post_list, post_list_error, post_list_loding}) {
    if (post_list_loding) {
        return <span>Cargando...</span>
    }
    else if (post_list_error) {
        return <span>{post_list_error.message}</span>
    }
    else {
        return post_list.map(
            (post) => {

                return (
                  

                    <PostCard 
                        title={post.title} 
                        body={post.body} 
                        id={post.id} 
                        userId={post.userId} 
                        key={post.id} 
                    />

                )
            }
        )
    }
}