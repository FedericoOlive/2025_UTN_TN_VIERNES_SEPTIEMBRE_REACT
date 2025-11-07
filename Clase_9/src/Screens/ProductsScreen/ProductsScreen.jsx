import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../services/productsService'

const ProductsScreen = () => {
    /* 
    Tener un estado que gestione el listado de productos
    Para ello crearemos 3 estados:
        - isLoading Default: false
        - response Default: null
        - error Default: null
    
    Crear una funcion llamada sendRequest( requestCallback )
    */

    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null)


    //Send request se encargara de manejar los estados de consulta (response, loading, error)
    async function sendRequest ( requestCallback ){
        try{
            //Como vamos a resolver una consulta al servidor marcamos en true el estado de carga
            setIsLoading(true)
            const response = await requestCallback()
            //Una vez obtenida la respuesta del servidor la guadamos en el estado de respuesta
            setResponse(response)
        }
        catch(error){
            //Si llega a haber un error lo guadamos en estado de error
            console.error(error)
            setError(error.message)
        }
        finally{
            //Pase lo que pase, al finalizar el try-catch debemos marcar que se termino la carga
            setIsLoading(false)
        }
    }


    /* Encargadas de solicitar al servidor */
    function loadProducts (){
        sendRequest(
            getAllProducts
        )
    }

    useEffect(
        loadProducts,
        [] //Solo ejecutar 1 vez (cuando se monte el componente)
    )


    console.log(isLoading, response, error)

    /* sendRequest(
        getAllProducts
    ) */


    //Ejemplo de estado
    //const [isOpen, setIsOpen] = useState()
    

    return (
        <div>ProductsScreen</div>
    )
}

export default ProductsScreen