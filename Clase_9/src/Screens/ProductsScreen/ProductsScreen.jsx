import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../services/productsService'
import useRequest from '../../hooks/useRequest'
import ProductList from '../../Components/ProductList/ProductList'

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



    return (
        <div>
            <h1>Catalogo de productos</h1>
            {
                isLoading 
                ? <span>Cargando...</span>
                : (
                    error 
                    ? <span style={{color: 'red'}}>{error}</span> 
                    : <ProductList products={response}/>
                )
            }
        </div>
    )
}


export default ProductsScreen