import ProductCard from "../ProductCard/ProductCard"

//Idealmente luego este componente debera estar en la carpeta de Components
function ProductList ({products}) {

    //Si no hay productos devolver null
    if(!products){
        return null
    }
    
    //Si lista esta vacia dar error
    if(products.length === 0){
        return <span>No hay productos en la lista</span>
    }

    //Si esta todo bien
    return products.map(
        (product) => {
            return <ProductCard key={product.id} product={product}/>
        }
    )

}

export default ProductList