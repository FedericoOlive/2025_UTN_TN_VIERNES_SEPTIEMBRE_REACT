import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../services/productsService'
import useRequest from '../../hooks/useRequest'

const ProductsScreen = () => {
    

    const {
        isLoading, 
        response,
        error, 
        sendRequest
    } = useRequest()


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


    console.log(
        'Cargando:', isLoading, 
        'Respuesta servidor:',  response, 
        "Error:", error
    )

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